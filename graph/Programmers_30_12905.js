//https://programmers.co.kr/learn/courses/30/lessons/12905
//제출답안1. 시간초과
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
