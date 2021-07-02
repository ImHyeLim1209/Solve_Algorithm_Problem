//https://www.hackerrank.com/challenges/repeated-string/problem
// 소문자로된 문자열 s. 무한대로 반복된다.
// 무한대의 문자열의 처음 n개의 문자를 찾거나 출력할 수 있다.
// ex. s = 'abcac', n = 10
//     처음 10개의 문자는 abcacabcac입니다. 해당 서브스트링에는 a가 4번 출현합니다.

// 1. 현재 substring이 갖고있는 a 의 수를 구한다.
// 2. substring의 substring을 구한 후 a의 수를 구한다.
// 3. 더한다.
function repeatedString(s, n) {
  const cntA = Array.from(s).filter((v) => v === 'a').length * Math.floor(n/s.length);
  const subA = Array.from(s).slice(0, n % s.length).filter((v) => v === 'a').length;
  return cntA + subA;
}
