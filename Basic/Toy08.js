//정수(음수 포함)를 요소로 갖는 배열을 입력받아 3개의 요소를 곱해 나올 수 있는 최대값을 리턴
//가장 큰 곱의 결과를 내기위해 음수가 필요한 경우 -> 2개의 절대값이 가장 큰 음수를 곱해야 한다.

//3개 요소의 곱의 최대값은 두가지 후보가 있다.
 //1. 큰 양수만 3개 곱한 경우 
 //2. 절대값이 가장 큰 음수 2개 x 가장 큰 양수 1개

const largestProductOfThree = function (arr) {
  const sorted = arr.slice().sort((a, b) => a - b);
  const len = arr.length;
  const candi1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
  const candi2 = sorted[len - 1] * sorted[0] * sorted[1];
  return Math.max(candi1, candi2);
};
