// https://app.codility.com/programmers/lessons/16-greedy_algorithms/tie_ropes/
// A는 로프 길이들이 담겨있다.
// 이웃한 로프들을 묶어 K길이 이상을 만들고 만들어진 묶음의 최대의 갯수?

// N은 십만, K를 포함한 각 로프의 길이는 10억까지 가능

// 이웃한 로프 => sort로 해결하기는 어렵다.
// Binary Search할 묶음의 범위가 없음
// DP 혹은 Greedy

// Greedy하게 K이상일 때까지 로프를 묶는다.
// 로프가 묶이면 카운팅
function solution(K, A) {
  let cnt = 0;
  let i = 0;
  let acc = 0;
  while (i < A.length) {
    acc += A[i];
    if (acc >= K) {
      cnt++;
      acc = 0;
    }
    i++;
  }
  return cnt;
}
