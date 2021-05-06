//한 변의 길이가 2의 제곱수인 정사각형의 흑백 이미지가 2차원 배열로 주어집니다. 
//각 좌표에는 0(백) 또는 1(흑)이 저장되어 있습니다. 이미지에 포함된 데이터가 모두 1이면 '1', 모두 0이면 '0' 한 글자로 압축할 수 있습니다. 
//그렇지 않은 경우, 이를 대문자 X로 표시하고 전체를 4등분하여 재귀적으로 압축합니다. 4등분한 영역의 순서는 좌측 상단, 우측 상단, 좌측 하단, 우측 하단입니다.

//예시
/*image = [
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 1, 1, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1],
];
result = decompression(image);
console.log(result);*/

//제출답안
const decompression = function (image) {
  const result = '';
  const getCompressionResult = (matrix, start, end) => {
    const target = matrix[start[0]][start[1]];
    for (let i = start[0]; i <= end[0]; i++) {
      for (let j = start[1]; j <= end[1]; j++) {
        if (target !== matrix[i][j]) {
          return 'X';
        }
      }
    }
    return target.toString();
  }

  const getValues = (matrix, start, end) => {
    const result = '';
    for (let i = start[0]; i <= end[0]; i++) {
      for (let j = start[1]; j <= end[1]; j++) {
        result += matrix[i][j];
      }
    }
    return result;
  };

  const aux = (matrix, start, end) => {
    const compression = getCompressionResult(matrix, start, end);

    if (compression !== 'X') return compression;

    if (start[0] - end[0] + 1 === 2) { //base case
      return getValues(matrix, start, end);
    }

    //정사각형을 사등분한다.
    const midR = parseInt((start[0] + end[0]) / 2);
    const midC = parseInt((start[1] + end[1]) / 2);

    const result = 'X' +
      aux(matrix, start, [midR, midC]) +
      aux(matrix, [start[0], midC + 1], [midR, end[1]]) +
      aux(matrix, [midR + 1, start[1]], [end[0], midC]) +
      aux(matrix, [midR + 1, midC + 1], end);

    return result;
  }

  return aux(image, [0, 0], [image.length - 1, image.length - 1]);
};

//레퍼런스기반 리팩토링: base case를 1*1 로 둔다.
const decompression = function (image) {
  const aux = (matrix, start, end) => {
    const [startR, startC] = start;
    const [endR, endC] = end;
    if (start[0] === end[0]) { //1*1 베이스 케이스
      return matrix[startR][startC].toString();
    }

    const midR = parseInt((startR + endR) / 2);
    const midC = parseInt((startC + endC) / 2);

    //바로 사등분한다.
    const leftUpper = aux(matrix, start, [midR, midC]);
    const rightUpper = aux(matrix, [startR, midC + 1], [midR, endC]);
    const leftDown = aux(matrix, [midR + 1, startC], [endR, midC]);
    const rightDown = aux(matrix, [midR + 1, midC + 1], end);

    const result = leftUpper + rightUpper + leftDown + rightDown; //하나짜리씩 모두 합친다.
    if (result === '1111') return '1';
    else if (result === '0000') return '0';
    else return 'X' + result;
  }

  return aux(image, [0, 0], [image.length - 1, image.length - 1]);
};
