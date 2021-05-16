//https://programmers.co.kr/learn/courses/30/lessons/12949
//제출답안: arr2를 column<->row 뒤집어서 각 row별로 곱하기
function solution(arr1, arr2) {
  const ROW = arr1.length;
  const COLUMN = arr2[0].length;
  const result = [...Array(ROW)].map((_) => Array(COLUMN).fill(0));

  const transpose = (matrix) => {
    return matrix.reduce((acc, cur) => {
      return cur.map((value, idx) => {
        return [...(acc[idx] || []), value]
      });
    }, []);
  };

  const multipleArrs = (arr1, arr2) => {
    let result = 0;
    for (let i = 0; i < arr1.length; i++) {
      result += arr1[i] * arr2[i];
    }
    return result;
  }

  const reversedArr2 = transpose(arr2);

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COLUMN; j++) {
      result[i][j] += multipleArrs(arr1[i], reversedArr2[j]);
    }
  }
  return result;
}

//다른 답안
function solution(arr1, arr2) {
  return arr1
    .map((row) =>  //결과 배열은 arr1의 row와 row가 같으므로
      arr2[0].map((x, y) => //결과 배열은 arr2의 column과 column이 같으므로
        row.reduce((acc, cur, idx) =>
          acc + cur * arr2[idx][y], 0))); //arr1의 값 cur, arr2의 값 arr2[c][y]. arr1에서 현재 column은 arr2의 row
}
