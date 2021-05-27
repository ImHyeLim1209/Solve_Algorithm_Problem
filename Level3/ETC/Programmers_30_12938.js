//https://programmers.co.kr/learn/courses/30/lessons/12938
function solution(n, s) {
  if (s / n < 1) return [-1];

  const answer = [];
  const num = parseInt(s / n);
  const remainder = s % n;

  for (let i = 0; i < n - remainder; i++) {
    answer.push(num);
  }

  for (let i = 0; i < remainder; i++) {
    answer.push(num + 1);
  }
  return answer.sort((a, b) => a - b);
}
