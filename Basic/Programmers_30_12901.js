//https://programmers.co.kr/learn/courses/30/lessons/12901?language=javascript
///////////////////////
//1. 총 날짜를 계산하여 요일 도출(1월 1일은 금요일)
function solution(month, day) {
  const dayOfWeek = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const dayOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let totalDay = 0;
  for(let i = 1; i < month; i++){
    totalDay += dayOfMonth[i-1];
  }
  totalDay += day;

  return dayOfWeek[(totalDay-1)%7];
}

///////////////////////
//2. Date 객체 사용
//new Date('2016-2-29').toString() -> Mon Feb 29 2016 00:00:00 GMT+0900 (GMT+09:00)
function solution(month, day) {
  return new Date(`2016-${month}-${day}`).toString().slice(0, 3).toUpperCase();
}
