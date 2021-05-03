//https://programmers.co.kr/learn/courses/30/lessons/77485/solution_groups?language=javascript&type=all

//1. 제출 답안
function solution(rows, columns, queries) {
  const MOVES = [[0, 1], [1, 0], [0, -1], [-1, 0]]; //우하좌상

  //1. 초기 행렬 생성
  const matrix = Array(rows).fill().map((_, idx) => Array(columns).fill().map((_, idx2) => columns * idx + idx2 + 1));

  const isValidMove = (boundary, row, column) => {
    const [startRow, startColumn, endRow, endColumn] = boundary;
    return startRow <= row && row <= endRow && startColumn <= column && column <= endColumn;
  }

  //2. 회전
  const queryResults = queries
    .map((query) => {
      let moveIdx = 0;
      const [startRow, startColumn, endRow, endColumn] = query;
      const changeNumbers = [];
      const posDiff = [endRow - startRow, endColumn - startColumn]
      const maxIdx = (posDiff[0] + 1) * (posDiff[1] + 1) - (posDiff[0] - 1) * (posDiff[1] - 1);
      let position = [startRow, startColumn];

      while (changeNumbers.length < maxIdx) {
        const [rowDiff, colDiff] = MOVES[moveIdx];
        const newMove = [position[0] + rowDiff, position[1] + colDiff];
        if (isValidMove(query, newMove[0], newMove[1])) {
          changeNumbers.push([matrix[position[0] - 1][position[1] - 1], newMove.map((value) => value - 1)]);
          position[0] = newMove[0];
          position[1] = newMove[1];
        } else {
          moveIdx = (moveIdx + 1) % 4;
        }
      }
      changeNumbers.forEach((value) => { //matrix 갱신
        matrix[value[1][0]][value[1][1]] = value[0];
      });
      return changeNumbers.map((value) => value[0]);
    })

  //3. 작은 수 answer에 담기
  return queryResults.map((result) => Math.min(...result));
}

//2. 다른 사람의 코드: 사각형 각 변의 숫자변화를 일반화 하지 않고, 각 변마다 for문으로 해결
// 코드도 더 짧고, 어떤 방법인지 잘 보임
function solution(rows, columns, queries) {
  const a = [...Array(rows)].map((_, r) => [...Array(columns)].map((_, c) => r * columns + c + 1));
  const mins = [];

  queries.map(query => {
    const [x1, y1, x2, y2] = query.map(_ => _ - 1);
    let min = a[x1][y1], tmp = a[x1][y1];

    //for문 순서 바뀌면 안됨!
    for (let i = x1; i < x2; i++) { //사각형의 좌측 수직선 위의 숫자들을을 아래 -> 위 방향으로 숫자 이동
      a[i][y1] = a[i + 1][y1];
      min = Math.min(min, a[i][y1]);
    }
    for (let i = y1; i < y2; i++) {//for문 1에서 사각형의 좌측 하단 부분이 비게되므로 그 부분을 채우기 위해 하단에서 우측방향으로 숫자 이동
      a[x2][i] = a[x2][i + 1];
      min = Math.min(min, a[x2][i]);
    }
    for (let i = x2; i > x1; i--) {
      a[i][y2] = a[i - 1][y2];
      min = Math.min(min, a[i][y2]);
    }
    for (let i = y2; i > y1; i--) {
      a[x1][i] = a[x1][i - 1];
      min = Math.min(min, a[x1][i]);
    }
    a[x1][y1 + 1] = tmp; //이동 당시 가장 처음 숫자를 잃어버렸으므로 다시 준다.

    mins.push(min);
  })

  return mins;
}

