// https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
function solution(A) {
  const INF = 1000001;
  const isUsed = Array(INF).fill(false);

  A.forEach((v) => {
    if (v < 1) return;
    isUsed[v] = true;
  });

  for (let i = 1; i < isUsed.length; i++) {
    if (!isUsed[i]) return i;
  }
  return INF; //범위를 초과한 경우
}

console.log(solution([1, 3, 6, 4, 1, 2]));
