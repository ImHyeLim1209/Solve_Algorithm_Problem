// https://programmers.co.kr/learn/courses/30/lessons/17679
// 1. 사각형을 찾는다. -> 지운다 -> 빈공간 채운다 -> 찾는다 반복
// 지우는 방법
// (0, 0) 이라면 주변 1칸씩을 모두 확인해서 같으면 지울 set(중복X. 문자열)에 추가해준다.
// 모두 찾은 후에는 다른 문자로 치환한다.
// 다시 전체 board를 돌면서 치환된 문자를 만나면 위의 문자를 가져온다. (단 맨 윗 줄의 경우는 제외한다.)
function solution(m, n, board) {
  // 편의상 문자열을 배열로 바꾼다(문자열은 readonly)
  let cnt = 0;
  const matrix = board.map((str) => Array.from(str));

  // 지운 적이 있으면 return true, 없으면 return false
  const erase = (board) => {
    const blocks = new Set();

    const isRemovable = (row, col) => {
      return board[row][col] === board[row + 1][col] &&
        board[row + 1][col] === board[row][col + 1] &&
        board[row][col + 1] === board[row + 1][col + 1];
    }

    // 지울 블록을 찾는다.
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (board[i][j] !== '0' && isRemovable(i, j)) {
          blocks.add(`${i},${j}`);
          blocks.add(`${i + 1},${j}`);
          blocks.add(`${i},${j + 1}`);
          blocks.add(`${i + 1},${j + 1}`);
        }
      }
    }

    // 지운다.
    for (const block of Array.from(blocks)) {
      const [row, col] = block.split(',');
      board[row][col] = '0';
    }

    // 옮긴다.
    move(board, Array.from(blocks));
    return blocks.size;
  }

  // 빈 공간을 채우는 함수
  const move = (board, blocks) => {
    for (const block of blocks) {
      const [row, col] = block.split(',');
      for (let i = row; i > 0; i--) {
        board[i][col] = board[i - 1][col];
      }
      board[0][col] = '0';
    }
  }

  let findBlocks = 0;
  do {
    findBlocks = erase(matrix);
    cnt += findBlocks;
  } while (findBlocks !== 0)

  return cnt;
}
