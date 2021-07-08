// https://app.codility.com/programmers/lessons/14-binary_search_algorithm/min_max_division/
function solution(K, M, A) {
  let left = 0;
  let right = 0;

  let max = 0;
  for (let i = 0; i < A.length; i++) {
    right += A[i];
    if (max < A[i]) max = A[i];
  }

  // 이거 만드는게 좀 어려웠음
  // k = 1일 때를 고려해서 만들자!
  const isPossible = (k, mid, arr) => {
    k--;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (sum + arr[i] <= mid) sum += arr[i];
      else {
        k--;
        sum = arr[i];
      }
      if (k < 0) return false;
    }

    return true;
  }

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (max <= mid && isPossible(K, mid, A)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
