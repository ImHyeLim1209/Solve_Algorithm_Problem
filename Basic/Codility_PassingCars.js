// https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
// 0과 1의 순서쌍의 갯수 세기
// 단, 인덱스 이전인 1과는 쌍이 될 수 없다.

// 제출답안: 0을 기준으로 순서쌍 만들기
// 1. 1의 출현횟수로 히스토그램(역순)을 만든다.
// 2. A를 돌면서 0이 되면 히스토그램의 숫자를 가져와 더한다.
function solution(A) {
  let cnt = 0;
  const histogram = Array(A.length + 1).fill(0);

  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] === 0) histogram[i] = histogram[i + 1];
    else histogram[i] = histogram[i + 1] + 1
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) cnt += histogram[i];
    if (cnt > 1000000000) return -1;
  }
  return cnt;
}

//다른 답안: 1을 기준으로 순서쌍 만들기(Java) -> 1을 기준으로 하므로 0의 갯수를 앞에서 부터 세면 된다.
public int solution(int[] A) {
  int pCount = 0;
  int sum = 0;
  for (int i = 0; i < A.length; i++) {
    if (0 == A[i]) pCount++;
    else {
      sum += pCount * A[i];
      if (sum > 1000000000) return -1;
    }
  }
  return sum;
}
