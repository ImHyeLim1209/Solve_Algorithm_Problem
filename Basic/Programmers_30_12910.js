//https://programmers.co.kr/learn/courses/30/lessons/12910?language=javascript
////////////////////////
//1. Sort할 때 n번째 문자를 우선으로 보고 같다면 사전정렬상으로 비교한다.
function solution(strings, n) {
  return strings.sort((a,b) => {
      let result = a.charCodeAt(n) - b.charCodeAt(n); //str.charCodeAt(n): 문자열 str의 n번째 문자(0부터 시작)의 유니코드 리턴
      if(result === 0){
          result = a >= b? 1: -1 //사전상 비교
      }
      return result;
  })
}

////////////////////////
//2. str의 n번째 문자를 보고 같다면 사전기준 정렬, 다르다면 n번째 문자만 사전기준 정렬.
//str1.localeCompare(str2): str1을 기준으로 str2와 비교하여 사전정렬상 str1이 더 뒤에 있다면 1, str1이 앞에 있다면 -1, 같다면 0을 리턴
function solution(strings, n) {
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}
