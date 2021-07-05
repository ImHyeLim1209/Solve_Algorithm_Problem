// https://app.codility.com/programmers/lessons/9-maximum_slice_problem/
// 해당 요소를 끝, 시작으로 하는 부분합 중 최대 값을 찾는다.
//   -모든 요소를 포함하지 않는 0이 될 수 있으므로 후보에 0이 포함된다.
//   -가장 마지막 요소인 0번째와 A.length-1번째는 문제 정의상 절대 포함될 수 없으므로 0으로 한다.
// 빠지는 요소를 A[i]로 하는 for문을 돌면서 앞의 부분합(subSum1)과 뒤의 부분합(subSum2)의 최대 값을 더한다.
function solution(A) {
  const subSum1 = Array(A.length).fill(0); //해당 요소를 끝으로 포함하는 부분합 중 최대값(단, 모든 요소를 포함하지 않는 0이 될 수 있으므로 후보에 0이 포함된다.)
  for (let i = 1; i < A.length - 1; i++) {
    if (i === 1) {
      subSum1[i] = Math.max(0, A[i]);
      continue;
    }
    const value = subSum1[i - 1] + A[i];
    subSum1[i] = Math.max(value, A[i], 0);
  }

  const subSum2 = Array(A.length).fill(0); //해당 요소를 시작으로 포함하는 부분합 중 최대값
  for (let i = A.length - 2; i >= 1; i--) {
    if (i === A.length - 2) {
      subSum2[i] = Math.max(0, A[i]);
      continue;
    }
    const value = subSum2[i + 1] + A[i];
    subSum2[i] = Math.max(value, A[i], 0);
  }

  let results = [0];
  for (let i = 1; i < A.length - 1; i++) {
    const value = subSum1[i - 1] + subSum2[i + 1];
    results.push(value);
  }
  return Math.max(...results);
}

console.log(solution([0, 10, -5, -2, 0])); // 10
