// https://programmers.co.kr/learn/courses/30/lessons/81302#fn1
// 제출1: 75.4점
function solution (places) {
  const isValidMove = (row, col, matrix) => {
    return matrix[row] && matrix[row][col];
  };

  const existPartition = (sRow, sCol, eRow, eCol, matrix) => {
    if (sRow + 2 === eRow) return matrix[sRow + 1][sCol] === 'X';
    if (sCol + 2 === eCol) return matrix[sRow][sCol + 1] === 'X';
    if (sRow + 1 === eRow && sCol + 1 === eCol) return matrix[sRow + 1][sCol] === 'X' && matrix[sRow][sCol + 1] === 'X';
    return false;
  };

  const checkArea = (row, col, matrix) => {
    const MOVES = [[1, 0], [2, 0], [0, 1], [0, 2], [1, 1]];

    for (const MOVE of MOVES) {
      const [rDiff, cDiff] = MOVE;
      const newRow = row + rDiff;
      const newCol = col + cDiff;

      if (!isValidMove(newRow, newCol, matrix)) continue;
      if (matrix[newRow][newCol] === 'P' && !existPartition(row, col, newRow, newCol, matrix)) {
        return false;
      }
    }
    return true;
  };

  const checkRoom = (matrix) => {
    for (let row = 0; row < matrix.length - 1; row++) {
      for (let col = 0; col < matrix[0].length - 1; col++) {
        if (matrix[row][col] === 'P' && !checkArea(row, col, matrix)) return false;
      }
    }
    return true;
  };

  const results = [];
  for (const place of places) {
    checkRoom(place) ? results.push(1) : results.push(0);
  }
  return results;
}
