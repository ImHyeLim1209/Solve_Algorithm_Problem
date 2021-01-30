//https://programmers.co.kr/learn/courses/30/lessons/12940
//최대공약수: 유클리드의 호제법 사용하여 재귀
//최소공배수 = 두 수의 곱 / 최대공약수
function solution(n, m) {
  const getGCD = (a, b) => {
    if(b === 0) return a;
    return getGCD(b, a % b);
  }
  const gcd = getGCD(n, m);
  return [gcd, n*m/gcd];
 }
