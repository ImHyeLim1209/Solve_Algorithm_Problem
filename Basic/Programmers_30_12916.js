//https://programmers.co.kr/learn/courses/30/lessons/12916?language=javascript
////////////////////
//1. string도 유사배열이므로 배열로 만든 후 forEach로 p와 y의 갯수를 센다.
function solution(str) {
  let pCnt = 0;
  let yCnt = 0;
  Array.from(str.toUpperCase()).forEach((char) => {
    if(char === 'P')  pCnt++;
    else if(char === 'Y')  yCnt++;
  })
  return pCnt === yCnt;
}

////////////////////
//2. str.match(정규표현식) str에서 정규표현식과 일치하는 부분을 담은 배열을 리턴. 해당 배열의 길이가 p와 y의 갯수이다. 
//단, match는 정규표현식에 맞는 문자가 없는 경우 0이 아닌 null을 리턴하는 것에 주의한다.
function numPY(s) {
  return s.match(/p/ig).length == s.match(/y/ig).length;
}
