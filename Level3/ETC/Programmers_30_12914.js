//https://programmers.co.kr/learn/courses/30/lessons/12914
//제출답안
function solution(n) { //사실 피보나치 수열과 거의 유사하다. 3까지 가기 위해서는 (1까지 이동후 +1) + (2까지 이동 후 +2) 와 동일하기 때문이다. 
  const fivo = [1, 1];
  for (let i = 2; i <= n; i++) {
    fivo.push((fivo[i - 2] + fivo[i - 1]) % 1234567) ;
  }
  return fivo[n];
}
