//radix sort 구현

const countSort = (arr, radix) => {
  const results = [];
  const counts = arr
    .reduce((acc, cur) => { //등장횟수 배열
      const idx = Math.floor(cur / radix) % 10;
      acc[idx]++;
      return acc;
    }, Array(10).fill(0))
    .reduce((acc, cur, idx) => { //누적값 배열로 변환
      if (idx > 0) {
        acc[idx] = acc[idx - 1] + cur;
      } else {
        acc[idx] = cur;
      }
      return acc;
    }, Array(10).fill(0));

  for (let i = arr.length - 1; i > -1; i--) {
    const idx = Math.floor(arr[i] / radix) % 10;
    results[counts[idx]] = arr[i];
    counts[idx]--;
  }

  return results.filter((value) => value !== undefined) //배열이기 때문에 arr[4] = 10; 이렇게 하면 arr의 0,1,2는 자동으로 undefined가 되버림
}

function radixSort(arr) {
  let leftArr = arr.filter((value) => value < 0).map((value) => -1 * value);
  let rightArr = arr.filter((value) => value >= 0);

  const leftMax = Math.max(...leftArr);
  let radix = 1;

  while (radix < leftMax) {
    leftArr = countSort(leftArr, radix);
    radix *= 10;
  }

  const rightMax = Math.max(...rightArr);
  radix = 1;

  while (radix <= rightMax) {
    rightArr = countSort(rightArr, radix);
    radix *= 10;
  }
  return [...(leftArr.reverse().map((value) => -1 * value)), ...rightArr]
}


let output = radixSort([1, 2, 21, 43, 100]);
console.log(output);
