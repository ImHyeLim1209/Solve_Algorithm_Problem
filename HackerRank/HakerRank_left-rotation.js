// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

// 방법1) 1회 shift하는 함수 rotate를 n번 호출 -> 시간초과
function rotLeft(a, d) {
  const rotate = (arr) => {
    const result = [];
    for (let i = 1; i < arr.length; i++) {
      result.push(arr[i]);
    }
    result.push(arr[0]);
    return result;
  }

  let result = [...a];
  for (let i = 0; i < d; i++) {
    result = rotate(result);
  }
  return result;
}

// 방법2) n번 회전 후의 index를 한 번에 계산
function rotLeft(a, d) {
  let result = Array(a.length).fill(0);
  for (let i = 0; i < a.length; i++) {
    let idx = i - d;
    if (idx < 0) idx += a.length;
    result[idx] = a[i];
  }
  return result;
}
