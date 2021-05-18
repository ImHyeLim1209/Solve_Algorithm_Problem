//https://programmers.co.kr/learn/courses/30/lessons/49994
//제출답안
function solution(dirs) {
  const LIMIT = 5;
  const Lines = new Set(); //지나갔던 경로를 저장한다. 
  const MOVES = { L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1] };
  const isValidMove = (coordinate) => {
    const [row, col] = coordinate;
    return row >= -1 * LIMIT && row <= LIMIT && col >= -1 * LIMIT && col <= LIMIT;
  }
  const getNextMove = (start, diff) => {
    const [row, col] = start;
    const [diffRow, diffCol] = diff;
    return [row + diffRow, col + diffCol];
  }

  let start = [0, 0];
  [...dirs].forEach((dir) => {
    const end = getNextMove(start, MOVES[dir]);
    if (isValidMove(end)) {
      Lines.add(`${start[0]}${start[1]}${end[0]}${end[1]}`); //경로를 문자열(Primitive)로 저장한다!!!!
      Lines.add(`${end[0]}${end[1]}${start[0]}${start[1]}`);
      start = end;
    }
  });
  return Lines.size / 2;
}
