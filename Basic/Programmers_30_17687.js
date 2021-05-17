//https://programmers.co.kr/learn/courses/30/lessons/17687
//제출답안
function solution(n, t, m, p) { //모든 숫자 돌면서 확인하기
  const answers = [];
  let cnt = 0;
  let order = 0;
  while (answers.length < t) {
    const nums = cnt.toString(n).toUpperCase().split('');
    for (let i = 0; i < nums.length; i++) {
      if (order === p - 1)
        answers.push(nums[i]);
      order = (order + 1) % m;
    }
    cnt++;
  }
  return answers.slice(0, t).join('');
}

//리팩토링
function solution(n, t, m, p) {
  let answer = '';
  let numbers = []; //숫자 하나씩 순서대로 전체: [0, 1, 1, 0, 1, 1, 1, 0, 0....]
  let j = 0;

  for (let i = p; answer.length < t; i += m) {
    let order = i - 1; //order는 계속 늘어난다. ex. 2진수 2명 1번째: 0, 2, 4, 6
    while (numbers[order] === undefined) {
      j.toString(n).toUpperCase().split('').forEach(v => numbers.push(v));
      j++
    }
    answer += numbers[order];
  }
  return answer;
}
