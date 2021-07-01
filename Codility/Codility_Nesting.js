// https://app.codility.com/programmers/lessons/7-stacks_and_queues/nesting/
function solution(S) {
  let cnt = 0;
  const hash = { "(": 1, ")": -1 };

  for (const char of S) {
    cnt += hash[char];
    if (cnt < 0) return 0;
  }

  return cnt === 0 ? 1 : 0;
}
