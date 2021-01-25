//https://programmers.co.kr/learn/courses/30/lessons/12917?language=javascript
///////////////////////////////
//1. 유사배열인 string을 배열로 변환 후 sort를 역순 정렬 되도록 구현
function solution(s) {
  return Array.from(s).sort((a,b) => (b.charCodeAt(0) - a.charCodeAt(0))).join('');
}

///////////////////////////////
//2. string을 split으로 각 문자로 구성된 배열로 변환 후 정렬 -> 
function solution(s) {
  return s.split('').sort().reverse().join('');
}
