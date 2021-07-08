// https://www.hackerrank.com/challenges/max-array-sum
// 스티커 문제 + 음수조건 추가 => 음수여도 dp 생성 과정은 변하지 않고, 초기 값만 변화가 있음
// 연속되지 않은 요소들의 합이 최대
// dp를 0부터시작, 1부터 시작 2개를 만든다.
function maxSubsetSum(arr) {
  const dp1 = Array(arr.length + 1).fill(0);
  const dp2 = Array(arr.length + 1).fill(0);
  dp1[0] = Math.max(arr[0], 0);
  dp1[1] = dp1[0];

  dp2[0] = 0;
  dp2[1] = Math.max(arr[1], 0);

  for (let i = 2; i < arr.length; i++) {
    dp1[i] = Math.max(dp1[i - 2] + arr[i], dp1[i - 1]);
    dp2[i] = Math.max(dp2[i - 2] + arr[i], dp2[i - 1]);
  }

  const max1 = Math.max(...dp1);
  const max2 = Math.max(...dp2);

  return max1 > max2 ? max1 : max2;
}
console.log(maxSubsetSum("3 5 -7 8 10".split(" ").map(Number))); // 15
console.log(maxSubsetSum("3 7 4 6 5".split(" ").map(Number))); // 13
console.log(maxSubsetSum("2 1 5 8 4".split(" ").map(Number))); // 11
