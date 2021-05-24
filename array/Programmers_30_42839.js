//
//제출답안
function solution(m, n, board) {
  let cnt = 0;
  board = board.map((v) => v.split("")); //2차원 배열로 만들기
  const remove = new Set();
  do {
    remove.clear();
    for (let row = 0; row < m - 1; row++) { //지워야할 곳을 찾아서 string으로 Set에 중복없이 넣기
      for (let col = 0; col < n - 1; col++) {
        if (board[row][col] &&
          board[row][col] === board[row + 1][col] &&
          board[row][col] === board[row][col + 1] &&
          board[row][col] === board[row + 1][col + 1]
        ) {
          remove.add(`${row} ${col}`);
          remove.add(`${row + 1} ${col}`);
          remove.add(`${row} ${col + 1}`);
          remove.add(`${row + 1} ${col + 1}`);
        }
      }
    }

    cnt += remove.size;

    //Set을 row순으로 정렬
    const sortedArr = [...remove]
      .map((v) => {
        const [row, col] = v.split(' ');
        return [Number(row), Number(col)];
      })
      .sort((a, b) => a[0] - b[0])

    for (let i = 0; i < sortedArr.length; i++) { //위쪽부터 블록을 지우고 채워나간다.
      const [row, col] = sortedArr[i];
      board[row][col] = false;

      for (let j = row - 1; j >= 0; j--) {
        if (board[j][col]) {
          board[j + 1][col] = board[j][col];
          board[j][col] = false;
        }
      }
    }
  } while (remove.size !== 0)
  return cnt;
}

//다른 답안
function solution(m, n, board) {
    board = board.map(v => v.split(''));

    while (true) {
        let founded = [];

        // 찾기: 4칸 다 넣지 않고 하나만 넣는다.
        for (let i = 1; i < m; i++) {
            for (let j = 1; j < n; j++) {
                if (board[i][j] && board[i][j] === board[i][j - 1] && board[i][j] === board[i - 1][j - 1] && board[i][j] === board[i - 1][j]) {
                    founded.push([i, j]);
                }
            }
        }

        if (! founded.length) return [].concat(...board).filter(v => ! v).length;

        // 부수기: 0으로 치환
        founded.forEach(a => {
            board[a[0]][a[1]] = 0;
            board[a[0]][a[1] - 1] = 0;
            board[a[0] - 1][a[1] - 1] = 0;
            board[a[0] - 1][a[1]] = 0;
        });

        // 재정렬
        for (let i = m - 1; i > 0; i--) {
            if (! board[i].some(v => ! v)) continue; //0이 없는 row는 넘어간다.

            for (let j = 0; j < n; j++) {
                for (let k = i - 1; k >= 0 && ! board[i][j]; k--) {
                    if (board[k][j]) { //윗 칸(k)이 false가 아니라면 아래 칸(i)에 값을 넘겨줄 수 있다.
                        board[i][j] = board[k][j];
                        board[k][j] = 0;
                        break;
                    }
                }
            }
        }
    }
}
