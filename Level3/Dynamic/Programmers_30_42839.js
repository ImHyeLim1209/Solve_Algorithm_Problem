//https://programmers.co.kr/learn/courses/30/lessons/12907
//제출답안: 시간초과
function solution(n, money) {
  const memo = [...Array(n + 1)].map((_) => Array(money.length).fill(0));
  money.forEach((v, idx) => { if (v <= n) memo[0][idx] = 1 });

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < money.length; j++) {
      let coinIncluded = 0;
      if (i - money[j] >= 0) {
        coinIncluded = memo[i - money[j]][j];
      }

      let coinExcluded = 0;
      if (j >= 1) {
        coinExcluded = memo[i][j - 1];
      }
      memo[i][j] = (coinIncluded + coinExcluded) % 1000000007;
    }
  }
  return memo[n][money.length - 1];
}

//다른 답안: 2차원 배열을 사실 쓸 필요가 없다. 
const solution = function (total, coins) {
  let dp = [1];
  for (let i = 0; i < total; ++i) dp.push(0);

  coins.map(unit => {
    dp[unit] += 1;
    for (let i = unit + 1; i <= total; ++i) {
      dp[i] += dp[i - unit] & 1000000007;
    }
  });

  return dp[total];
};
