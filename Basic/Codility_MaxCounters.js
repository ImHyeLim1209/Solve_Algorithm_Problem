// https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
// 제출1: 그대로 구현 -> 시간초과
function solution(N, A) {
  let max = 0;
  const result = Array(N).fill(0);
  A.forEach((idx) => {
    if (idx === N + 1) {
      result.fill(max);
    } else {
      result[idx - 1] += 1;
      max = max < result[idx - 1] ? result[idx - 1] : max;
    }
  })
  return result;
}

// 제출2: counter가 모두 최대값으로 변하는 케이스는 나중에 계산
function solution(N, A) {
  let lastMax = 0; //최종 max 값
  let max = 0; //현재까지 max 값
  const result = Array(N).fill(0);
  A.forEach((idx) => {
    if (idx === N + 1) {
      lastMax = max;
    } else {
      //갱신할 때 counter를 모두 최대값으로 변경한 적이 있다면 해당 값만 최대값으로 변경한 후에 +1 연산 수행.
      if (result[idx - 1] < lastMax) result[idx - 1] = lastMax;
      result[idx - 1] += 1;
      max = max < result[idx - 1] ? result[idx - 1] : max;
    }
  });
  for (let i = 0; i < result.length; i++) {
    if (result[i] < lastMax) result[i] = lastMax;
  }
  return result;
}
