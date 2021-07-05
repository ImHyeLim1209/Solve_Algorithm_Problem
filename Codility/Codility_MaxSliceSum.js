// https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/
// A의 부분 배열의 최대 합을 구해라
// 누적 했을 때 이전 누적값보다 더 커지면 누적값을 넣고, 그렇지 않으면 내 자신으로부터 새로운 누적을 시작한다.
function solution(A) {
  const auxArr = [];
  for (let i = 0; i < A.length; i++) {
    if (i === 0 || auxArr[i - 1] + A[i] < 0) {
      auxArr.push(A[i]);
    } else if (auxArr[i - 1] + A[i] >= 0) {
      const value = Math.max(auxArr[i - 1] + A[i], A[i]);
      auxArr.push(value);
    }
  }
  return Math.max(...auxArr);
}
