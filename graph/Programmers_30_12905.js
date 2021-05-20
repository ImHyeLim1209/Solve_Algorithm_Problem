//https://programmers.co.kr/learn/courses/30/lessons/12905
//제출답안1. 시간초과
//모든 좌표를 방문하면서 해당좌표를 왼쪽 상단 시작점으로 하는 정사각형을 구해나간다. 1 > 4 > 9 > 16....
function solution(board) {
  const isValidPos = (row, col) => {
    return board[row] !== undefined && board[row][col] !== undefined;
  }

  const isOne = (startR, startC, n) => {
    if (isValidPos(startR + n - 1, startC + n - 1) === false) return false;

    for (let i = startR; i < startR + n; i++) {
      for (let j = startC; j < startC + n; j++) {
        if (board[i][j] === 0) return false;
      }
    }
    return true;
  }

  const getMaxSquare = (startR, startC, min) => {
    while (isOne(startR, startC, min + 1)) { min++; }
    return min;
  }

  let max = 0;
  for (let i = 0; i < board.length - max; i++) {
    for (let j = 0; j < board[i].length - max; j++) {
      max = getMaxSquare(i, j, max);
    }
  }
  return max * max;
}


//제출답안2
//정사각형으로 4칸 중 최소인 값 + 1이 현재 범위에서의 최대 정사각형이다.
function solution(board) {
  const copyMatrix = (matrix) => {
    const result = [];
    matrix.forEach((line) => {
      const row = [];
      for (let i = 0; i < line.length; i++) row.push(line[i]);
      result.push(row);
    })
    return result;
  }

  const matrix = copyMatrix(board);
  let max = matrix[0][0];
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[i].length; j++) {
      if (matrix[i][j] !== 0) {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i][j - 1]) + 1;
        max = Math.max(max, matrix[i][j]);
      }
    }
  }
  return max ** 2;
}
