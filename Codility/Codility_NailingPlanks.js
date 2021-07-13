// 못의 갯수 범위는 0~C.length
// C[0]을 박아야 C[1]을 박을 수 있음 => sort X

// 시간초과: canUseNails가 제곱이 되는 것을 수정해야함.
function solution(A, B, C) {
  const canUseNails = (n) => {
    const isUsed = Array(A.length).fill(false);

    for (let i = 0; i < n; i++) {
      const pos = C[i];
      for (let j = 0; j < A.length; j++) {
        if (isUsed[j]) continue;
        if (A[j] <= pos && pos <= B[j]) isUsed[j] = true;
      }
    }
    return isUsed.every((v) => v);
  }

  let min = 0;
  let max = C.length;

  while (min <= max) {
    const mid = Math.floor((min + max) / 2);
    const result = canUseNails(mid);
    if (!result && mid === C.length) {
      return -1;
    } else if (result) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return min;
}


console.log(solution([2], [2], [1]));
