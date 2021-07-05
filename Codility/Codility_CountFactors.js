// https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/count_factors/
//방법1. Math.sqrt(N) - 1 까지 확인한 후 Math.sqrt만 따로 확인한다.
function solution(N) {
  if(N === 1) return 1;

  let cnt = 1;
  for (let i = 2; i < Math.sqrt(N); i++) {
    if (N % i === 0) cnt++;
  }
  cnt *= 2;
  if (N % Math.sqrt(N) === 0) cnt += 1;

  return cnt;
}

//방법2. Math.sqrt(N)도 for문 내에 같이 계산하기
function solution(N) {
  let cnt = 0
  for(let i = 1; i <= Math.sqrt(N); i++) {
    if(N % i === 0) cnt +=2;
    if(N % i === 0 && i === Math.sqrt(N)) cnt -= 1;
  }
  return cnt;
}
