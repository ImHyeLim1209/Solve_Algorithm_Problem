//////////////////////////
//2차원 배열을 Spiral로 돌기
//const 변수를 모두 선언 후 let 변수를 선언하자.
//변수가 너무 많다고 생각했는데 어쩔 수 없다..

const isValidMove = (matrix, row, column) => {
  return matrix[row] && matrix[row][column];
}

const spiralTraversal = function (matrix) {
  const RIGHT = [0, 1];
  const DOWN = [1, 0];
  const LEFT = [0, -1];
  const UP = [-1, 0];
  const MOVES = [RIGHT, DOWN, LEFT, UP]; //시계방향. 우하좌상
  const M = matrix.length;
  const N = matrix[0].length;
  const isVisited = Array.from(Array(M), () => Array(N).fill(false));
  const result = [matrix[0][0]];

  let moveIdx = 0;
  let row = 0;
  let column = 0;
  isVisited[row][column] = true;

  while (result.length < M * N) {
    let newRow = row + MOVES[moveIdx][0];
    let newColumn = column + MOVES[moveIdx][1];

    if (isValidMove(matrix, newRow, newColumn) && isVisited[newRow][newColumn] === false) {
      row = newRow;
      column = newColumn;
      isVisited[row][column] = true;
      result.push(matrix[row][column]);
    }
    else {
      moveIdx = (moveIdx + 1) % 4;
      continue;
    }
  }
  return result.join('');
};
