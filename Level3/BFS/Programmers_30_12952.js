//https://programmers.co.kr/learn/courses/30/lessons/12952
//제출답안
function solution(n) {
  let answer = 0;
  const matrix = [...Array(n)].map(() => Array(n).fill(false));

  const isValidPos = (row, col) => 0 <= row && row < n && 0 <= col && col < n;
  const isValidRow = (row) => matrix[row].filter((value) => value).length < 1;
  const isValidCol = (col) => {
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      if (matrix[i][col]) cnt++;
    }
    return cnt === 0;
  }
  const isValidCross = (row, col) => { //대각선
    const startL = [0, col - row]; //row가 0인 곳의 좌표를 범위가 넘더라도 일단 구하고 isValidPos로 체크함
    const startR = [0, col + row];

    for (let i = 0; i < n; i++) {
      const [row1, col1] = [startL[0] + i, startL[1] + i];
      const [row2, col2] = [startR[0] + i, startR[1] - i];
      if (isValidPos(row1, col1) && matrix[row1][col1]) return false;
      if (isValidPos(row2, col2) && matrix[row2][col2]) return false;
    }
    return true;
  }

  const isValidMove = (row, col) => { //가로세로대각선 확인하기
    return isValidRow(row) && isValidCol(col) && isValidCross(row, col);
  }

  const aux = (cnt, row) => {
    if (cnt === n) {
      answer++;
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValidMove(row, col)) {
        matrix[row][col] = true;
        aux(cnt + 1, row + 1);
        matrix[row][col] = false;
      }
    }
  }
  aux(0, 0);
  return answer;
}
