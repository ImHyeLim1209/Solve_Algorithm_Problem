/////////////////////////////
//1. dfs: 하나의 값을 찾을 때는 좋지만, 최소 값을 찾을 때는 bfs보다 불리하다. 정말 모든 경우의 수를 찾아보아야하기 때문이다.
const robotPath = function (room, src, dst) {
  const MOVES = [[0, 1], [1, 0], [0, -1], [-1, 0]]; //시계방향. 우하좌상
  const results = [];

  const isValidMove = (matrix, row, column) => {
    return matrix[row] && matrix[row][column] !== undefined;
  }

  const aux = (room, time, x, y) => {
    if (x === dst[0] && y === dst[1]) {
      return time; //찾았다.
    }

    for (let i = 0; i < MOVES.length; i++) {
      let nextRow = x + MOVES[i][0];
      let nextColumn = y + MOVES[i][1];
      if (!(isValidMove(room, nextRow, nextColumn)) || room[nextRow][nextColumn] === 1) {
        continue;
      }
      room[nextRow][nextColumn] = 1; //이동하기
      let result = aux(room, time + 1, nextRow, nextColumn);
      if (result) { results.push(result); }

      room[nextRow][nextColumn] = 0; //이동취소

    }
    return false;//못찾았다.
  }
  room[src[0]][src[1]] = 1;
  aux(room, 0, src[0], src[1]);
  return Math.min(...results);
};


//2. bfs: 최소 이동횟수를 찾는 경우 bfs로 찾는 것이 더 효율적이다. 중간에 답을 발견하면 더 이상의 경우의 수를 찾을 필요가 없기 때문이다.
//한 번 답을 찾았다면 그 이후에 찾는 답은 처음에 찾은 값보다 더 많은 이동횟수를 필요로 한다.
const robotPath = function (room, src, dst) {
  const aux = (M, N, candi, step) => {
    // 현재 위치
    const [row, col] = candi;

    // 배열의 범위를 벗어난 경우
    if (row < 0 || row >= M || col < 0 || col >= N) return;

    if (room[row][col] === 0 || room[row][col] > step) {
      room[row][col] = step;
    } else {
      // 장애물(1)이거나 이미 최소 시간(1)으로 통과가 가능한 경우
      return;
    }

    // dfs로 4가지 방향에 대해 탐색을 한다.
    // 완전탐색을 해야하므로 bfs나 dfs가 큰 차이가 없다.
    // bfs의 경우 목적지에 도착하는 경우 탐색을 중단해도 되므로,
    // 약간 더 효율적이다.
    aux(M, N, [row + 1, col], step + 1); // 상
    aux(M, N, [row - 1, col], step + 1); // 하
    aux(M, N, [row, col - 1], step + 1); // 좌
    aux(M, N, [row, col + 1], step + 1); // 우
  };

  // 로봇이 서 있는 위치를 1로 초기화하면 (다시 방문하지 않기 위해서),
  // 바로 옆 통로는 2가 된다.
  // 계산이 완료된 후에 최종값에 1을 빼주면 된다.
  aux(room.length, room[0].length, src, 1);

  const [r, c] = dst;
  return room[r][c] - 1;
};

const room = [
  [0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [0, 0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];
const src = [0, 3];
const dst = [7, 3];
let output = robotPath(room, src, dst);
console.log(output);


