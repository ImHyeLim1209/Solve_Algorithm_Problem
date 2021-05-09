//https://programmers.co.kr/learn/courses/30/lessons/42842

//제출답안
function solution(brown, yellow) {
  const sum = brown + yellow;
  const candidate = [];

  for (let h = 1; h <= Math.sqrt(sum); h++) {
    const w = sum / h;
    if (sum % h === 0 && (h - 2) * (w - 2) === yellow) {
      candidate.push([h, w]);
    }
  }

  return candidate[0].reverse();
}
