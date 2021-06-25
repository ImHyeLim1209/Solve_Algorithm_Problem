// https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium
// 모든 경우의 수 순서대로 다 찾아보기.
// 순서대로 찾는다면 하나의 요소만 +, - 하는 것만으로도 각각의 합을 구할 수 있다.
function solution(A) {
  let left = 0;
  let right = A.reduce((acc, cur) => acc + cur, 0);
  let min = Number.MAX_SAFE_INTEGER;
  for (let p = 1; p < A.length; p++) {
    left += A[p - 1];
    right -= A[p - 1];
    const diff = Math.abs(left - right);
    if (min > diff) min = diff;
  }
  return min;
}

console.log(solution([1, -1]));

// 처음에는 index 2개 만들어서 앞, 뒤 하나씩 더하고, 차이나면 작은 쪽에서 한 칸 씩 앞으로 했는데 오래 걸림
// 음수가 범위에 포함되므로 [양수, 음수] 섞여있는 조합에 주의해야함
