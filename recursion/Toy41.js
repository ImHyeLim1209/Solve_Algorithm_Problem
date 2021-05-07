//세로와 가로의 길이가 각각 R, M인 2차원 R X M 배열 grid가 주어졌을 때, '1'은 땅을 의미하고 '0' 은 물을 의미합니다. 주어진 2차원 배열에 존재하는 섬의 개수를 리턴해야 합니다.
//입출력 예시
/*
let grid = [
  ['0', '1', '1', '1'],
  ['0', '1', '1', '1'],
  ['1', '1', '0', '0'],
];
let result = countIslands(grid);
console.log(result); // --> 1

grid = [
  ['0', '1', '1', '1', '0'],
  ['0', '1', '0', '0', '0'],
  ['0', '0', '0', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '1', '0'],
];
result = countIslands(grid);
console.log(result); // --> 3
*/

//제출답안:
const countIslands = function (grid) {
  let cnt = 0;
  const isVisited = [...Array(grid.length)].map((_, idx) => Array(grid[idx].length).fill(false));
  const isValidMove = (row, col) => {
    return grid[row] && grid[row][col];
  }

  const aux = (row, col, start) => {
    if (!isValidMove(row, col) || grid[row][col] === '0' || isVisited[row][col]) return 0;
    isVisited[row][col] = true;

    const result = aux(row + 1, col, false) + aux(row, col + 1, false) + aux(row - 1, col, false) + aux(row, col - 1, false);
    if (start) //하나의 섬에는 하나만 cnt++ 되어야하므로
      cnt += 1;
    return result;
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        aux(i, j, true); //섬 탐색 출발지임을 true/false로 준다.
      }
    }
  }
  return cnt;
};

//리팩토링: 섬인지 확인한 구역은 '0'으로 만든다.
//상단 좌측부터 차례로 확인하므로 앞에서 '0'으로 만들어도 새로운 섬이 생기지 않는다.
const countIslands = function (grid) {
  let cnt = 0;

  const isValidMove = (row, col) => {
    return grid[row] && grid[row][col];
  }

  const aux = (row, col) => {
    if (!isValidMove(row, col) || grid[row][col] === '0') return;
    
    grid[row][col] = '0';

    aux(row + 1, col, false);
    aux(row, col + 1, false);
    aux(row - 1, col, false);
    aux(row, col - 1, false);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '0') continue;
      cnt++;
      aux(i, j);
    }
  }
  return cnt;
};
