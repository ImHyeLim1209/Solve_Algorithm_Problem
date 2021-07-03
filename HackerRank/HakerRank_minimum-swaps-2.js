// https://www.hackerrank.com/challenges/minimum-swaps-2/problem
// 정렬 안 된 배열. 숫자들은 연속적. 1부터 시작
// 너는 2개의 요소를 swap할 수 있어.
// 배열을 오름차순으로 바꾸기 위해 필요한 최소의 swap 수를 구해라 

// 방법: 직접 swap하기. 단, swap 한 뒤에도 index가 가리키는 요소가 정렬되지 않을 수 있음을 주의
function minimumSwaps(arr) {
  const copiedArr = [...arr];
  let cnt = 0;
  const swap = (array, idx1, idx2) => {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  }

  let idx = 0;
  while (idx < arr.length) {
    if (copiedArr[idx] !== (idx + 1)) {
      swap(copiedArr, idx, copiedArr[idx] - 1);
      cnt++;
    } else {
      idx++;
    }
  }
  return cnt;
}
