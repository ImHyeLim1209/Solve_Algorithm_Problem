//아래와 같이 정의된 ugly numbers 중 n번째 수를 리턴
//ugly number는 2, 3, 5로만 나누어 떨어지는 수. 1번째 ugly number = 1
//1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, 16, ...

//레퍼런스: O(N)
const uglyNumbers = function (n) {
  const uglyNumbers = [1];
  let idx2 = 0;
  let idx3 = 0;
  let idx5 = 0;

  for (let i = 1; i < n; i++) {
    const candidate = [2 * uglyNumbers[idx2], 3 * uglyNumbers[idx3], 5 * uglyNumbers[idx5]];
    const result = Math.min(...candidate);
    uglyNumbers.push(result);

    //중복제거를 위해 if-elseif 말고 if로 따로 처리  ex. [2*3, 3*2, 10]
    if (result === candidate[0]) { idx2++; } //candidate에 계속 가장 작은 수가 제거되므로 언젠가는 중복된 숫자들이 candidate에 함께 있는 순간이 온다.
    if (result === candidate[1]) { idx3++; }
    if (result === candidate[2]) { idx5++; }
  }
  return uglyNumbers[n - 1];
};
