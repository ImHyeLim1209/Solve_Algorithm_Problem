//https://programmers.co.kr/learn/courses/30/lessons/42586
//1. 날짜를 계산한 배열을 만든 후 while 혹은 for문을 돌면서 지금까지의 최대값과 비교해나가면서 값 구하기
function solution(progresses, speeds) {
  let answer = [];

  const days = progresses.map((progress, idx) => {
    return Math.ceil((100 - progress) / speeds[idx]);
  });

  let maxDay = days.shift();
  answer.push(1);

  while (days.length > 0) {
    let day = days.shift();
    if (maxDay >= day) {
      answer[answer.length-1]++;
    } else {
      maxDay = day;
      answer.push(1);
    }
  }
  return answer;
}
