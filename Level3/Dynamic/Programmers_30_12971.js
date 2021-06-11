//https://programmers.co.kr/learn/courses/30/lessons/12971
//제출답안
//dp = N까지 스티커의 합의 최대
function solution(sticker) {
  if (sticker.length === 1) return sticker[0];

  //0번째 스티커 사용 -> dp1[1] = 0번째 스티커를 사용했으므로 1번째 스티커는 사용할 수 없다. 따라서 dp1[1] = dp1[0] 이다.
  const dp1 = Array(sticker.length).fill(0);
  dp1[0] = sticker[0];
  dp1[1] = sticker[0];

  //1번째 스티커 사용
  const dp2 = Array(sticker.length).fill(0);
  dp2[0] = 0; //1번째 스티커를 사용할 것이기 때문에 바로 옆에있는 0번째 스티커는 사용할 수 없다.
  dp2[1] = sticker[1];

  for (let i = 2; i < sticker.length; i++) {
    //지금까지 스티커 합 중 최대를 고르거나 자기자신의 스티커 값을 사용(n-2번째와 함께)해나간다.
    //dp1의 경우 마지막 스티커는 0번째 스티커와 이웃이기 때문에 사용할 수 없다.
    dp1[i] = i === sticker.length - 1 ? dp1[i - 1] : Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
  }
  return Math.max(dp1[dp1.length - 1], dp2[dp2.length - 1]);
}
