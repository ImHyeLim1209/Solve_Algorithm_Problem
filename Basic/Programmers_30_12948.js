//https://programmers.co.kr/learn/courses/30/lessons/12948?language=javascript
//////////////////
//1. slice 사용
function solution(phone_number) {
    return "*".repeat(phone_number.slice(0, -4).length) + phone_number.slice(-4);
}

//////////////////
//2. 정규식 사용
// \d : 숫자
// x(?=y) : 'y'가 뒤따라오는 'x'에만 대응. 
// \d{4}: 4자리 숫자
// /g: 문자열 내의 모든 패턴 찾기

function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}
