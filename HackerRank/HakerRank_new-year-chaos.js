// https://www.hackerrank.com/challenges/new-year-chaos/problem
// 한 사람은 2명의 사람과 바꿔치기, 매수할 수 있다.
// 12345... 순으로 있었을 때 최소 몇 번 바꿔야 q처럼 될까요?
// 불가능하다면 "Too chaotic" 리턴

// 바로 앞에 있는 사람과 바꿀 수 있다. 최대 2번 가능
// 1. 2칸 이상 자리가 이동했다면 Too Chaotic

// 방법1) 2. 버블 소트로 순서대로 만들어준다. -> 횟수 세기
// 방법2) 2. 뇌물을 먹은 사람을 찾는다.
//        -내가 뇌물을 먹었다면 내 앞에 나보다 큰 숫자가 있을 것이다. 이 숫자를 찾자. 
//        -단, 뇌물은 2번까지만 쓸 수 있으므로 나에게 뇌물을 먹인 숫자는 내 자리를 차지하거나 혹은 내자리 바로 앞까지 갈 수가 있다.
//         -index가 0부터 시작하므로 q[i]-1이 아니라 q[i]-2가 된다.
function minimumBribes(q) {
  let cnt = 0;
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - (i + 1) >= 3) return "Too chaotic";

    for (let j = Math.max(0, q[i] - 2); j < i; j++) {
      if (q[j] > q[i]) cnt++;
    }
  }
  return cnt;
}

console.log(minimumBribes("1 2 5 3 7 8 6 4".split(' ')));
