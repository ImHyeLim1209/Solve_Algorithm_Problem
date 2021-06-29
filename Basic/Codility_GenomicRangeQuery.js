// https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/
//답안1. 시간초과
function solution2(S, P, Q) {
  const result = [];
  const hash = { "A": 1, "C": 2, "G": 3, "T": 4 };
  const M = P.length;
  for (let i = 0; i < M; i++) {
    const p = P[i];
    const q = Q[i];
    const range = Array.prototype.map.call(S.slice(p, q + 1), (v) => hash[v]);
    result.push(Math.min(...range));
  }
  return result;
}

//답안2. 해당 범위에서 최솟값을 찾는 것보다 A가 있는지 C가 있는지... 순서대로 확인하는 것이 훨씬 빠르다.
function solution(S, P, Q) {
  const result = [];
  const M = P.length;
  for (let i = 0; i < M; i++) {
    const p = P[i];
    const q = Q[i];

    const slice = S.slice(p, q + 1);

    if (slice.indexOf('A') !== -1) result.push(1);
    else if (slice.indexOf('C') !== -1) result.push(2);
    else if (slice.indexOf('G') !== -1) result.push(3);
    else if (slice.indexOf('T') !== -1) result.push(4);
  }

  return result;
}
