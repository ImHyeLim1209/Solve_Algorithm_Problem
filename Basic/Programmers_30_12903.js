//https://programmers.co.kr/learn/courses/30/lessons/12903?language=javascript
//substr은 더 이상 사용되지 않으며 처음에 표준 라이브러리의 일부가 아닌 것에 .(legacy function)
function solution(s) {
  const idx = parseInt(s.length/2);
  return s.length % 2 === 1? s[idx] : s.slice(idx-1, idx+1);
}
