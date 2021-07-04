// https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
// 방법1)
function solution(A) {
  const INF = 1000001; //index 범위때문에 이만큼 가질 수 밖에 없었다...
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

// 방법2) set으로 중복 없애기
function solution(A) {
  const set = new Set(A);
  for (let i = 1; i <= A.length + 1; i++) {
    if (!set.has(i)) return i;
  };
  return -1;
}


console.log(solution([1, 3, 6, 4, 1, 2]));
