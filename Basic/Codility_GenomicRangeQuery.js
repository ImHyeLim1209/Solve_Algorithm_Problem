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

//답안3 -> 2와 유사하지만 시간초과
//답안 2는 직접 slice 치고 찾기 때문에 더 오래걸릴 것 이라 생각했으나 의외로 그렇지 않음
//시간 초과가 발생했을 때 내장 함수를 이용하는 것이 더 나을 수도 있다.
function solution(S, P, Q) {
  let result = [];
  const isInclude = (str, target, start, end) => {
    for (let i = start; i <= end; i++) {
      if (str[i] === target) return true;
    }
    return false;
  }

  for (let i = 0; i < P.length; i++) {
    if (isInclude(S, "A", P[i], Q[i])) result.push(1);
    else if (isInclude(S, "C", P[i], Q[i])) result.push(2);
    else if (isInclude(S, "G", P[i], Q[i])) result.push(3);
    else if (isInclude(S, "T", P[i], Q[i])) result.push(4);
  }
  return result;
}
