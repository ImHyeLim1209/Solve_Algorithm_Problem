// https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/flags/
// 1. 모든 peak를 구한다(N)
// 2. 플래그 가능 범위는 0~peak.length 까지이다. binary Search한다.
// K개의 플래그를 사용했다면 각 플래그간의 차이는 K 이상 나야한다.

// 플래그 예시) 23개의 values. Math.sqrt(23) = 4.xx. peak는 5개 가능
X P XXXX P XXXX P XXXX P XXXX P X

// 1. 최대 플래그 수 = Math.sqrt(A.length) + 1
function solution(A) {
  if (A.length <= 2) return 0;
  const peaks = [];
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
      peaks.push(i);
    }
  }

  const checkPossible = (peaks, flgCnt, length) => {
    // 내가 생각한 가능한 플래그 수
    //if (flgCnt > Math.floor(length / flgCnt)) return false;
    // 실제 가능한 최대 플래그 수
    if (flgCnt > Math.sqrt(length) + 1) return false;

    let i = 1;
    let lastPeak = peaks[0];
    let restFlgCnt = flgCnt - 1;
    while (i < peaks.length) {
      if (restFlgCnt === 0) return true;
      if (peaks[i] - lastPeak < flgCnt) {
        i++;
        continue;
      }
      restFlgCnt--;
      lastPeak = peaks[i];
      i++;
    }
    return restFlgCnt === 0;
  }

  let min = 0;
  let max = peaks.length;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2)
    if (mid === 0 || checkPossible(peaks, mid, A.length)) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return max;
}



// 방법2) 최대 플래그 수 Math.ceil((A.length-2) / flgCnt)
function solution(A) {
  if (A.length <= 2) return 0;
  const peaks = [];
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
      peaks.push(i);
    }
  }

  const checkPossible = (peaks, flgCnt, length) => {
    // 내가 생각한 가능한 플래그 수
    if (flgCnt > Math.ceil(length / flgCnt)) return false;
    // 실제 가능한 최대 플래그 수
    //if (flgCnt > Math.sqrt(length) + 1) return false;

    let i = 1;
    let lastPeak = peaks[0];
    let restFlgCnt = flgCnt - 1;
    while (i < peaks.length) {
      if (restFlgCnt === 0) return true;
      if (peaks[i] - lastPeak < flgCnt) {
        i++;
        continue;
      }
      restFlgCnt--;
      lastPeak = peaks[i];
      i++;
    }
    return restFlgCnt === 0;
  }

  let min = 0;
  let max = peaks.length;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2)
    if (mid === 0 || checkPossible(peaks, mid, A.length-2)) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return max;
}


