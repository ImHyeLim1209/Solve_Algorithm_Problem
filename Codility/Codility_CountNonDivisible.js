// https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/count_non_divisible/
// 답안1: Timeout
function solution(A) {
  const hash = A.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  let result = Array(A.length).fill(A.length);
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A.length; j++) {
      if (A[i] % A[j] === 0) result[i] -= 1;
    }
  }
  return result;
}

// 답안2: 있는 목록 내에서 나누지 않고 직접 소수를 찾아서 해당 소수의 출현 횟수를 빼준다.
//        단, 4*4와 같이 나눠지는 수가 1개여서 한 번만 빼야 하는 경우를 알기 위해 if문을 2개로 나누었다.
function solution(A) {
  const counter = Array(100001).fill(0);
  for (let i = 0; i < A.length; i++) {
    const num = A[i];
    counter[num]++;
  }

  let result = Array(A.length).fill(A.length);
  for (let i = 0; i < A.length; i++) {
    for (let j = 1; j <= Math.sqrt(A[i]); j++) {
      if (A[i] % j === 0 && counter[j] !== 0) result[i] -= counter[j];
      if (A[i] % j === 0 && A[i] / j !== j) result[i] -= counter[A[i] / j];
    }
  }
  return result;
};
