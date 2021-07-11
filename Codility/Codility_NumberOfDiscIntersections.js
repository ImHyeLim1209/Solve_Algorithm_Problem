// https://app.codility.com/programmers/lessons/6-sorting/number_of_disc_intersections/

//제출답안1: 시간초과 n^2
function solution(A) {
  let cnt = 0;
  const isOverlap = (c1, r1, c2, r2) => {
    //let min1 = c1 - r1;
    let max1 = c1 + r1;
    let min2 = c2 - r2;
    //let max2 = c2 + r2;
    //1. 중간 부분이 겹치는 경우
    if (max1 >= min2) return true;
    return false;
  }

  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (isOverlap(i, A[i], j, A[j])) {
        cnt++;
      }
      if (cnt > 10000000) return -1;
    }
  }
  return cnt;
}

//제출답안2: max, min 각각 정렬한 다음에 새로운 순서쌍을 센다.
function solution(A) {
  const maxArr = [];
  const minArr = [];
  for (let i = 0; i < A.length; i++) {
    maxArr.push(i + A[i]);
    minArr.push(i - A[i]);
  }

  maxArr.sort((a, b) => a - b);
  minArr.sort((a, b) => a - b);

  let cnt = 0;
  let disk = 0;
  let maxIdx = 0;
  for (let minIdx = 0; minIdx < minArr.length; minIdx++) {
    // 1. 한 칸 이동하면 빠지는 디스크가 있을 수 있다.
    while (maxArr[maxIdx] < minArr[minIdx]) {
      disk--;
      maxIdx++;
    }
    // 2. 새로운 디스크 쌍을 센다.
    cnt += disk;

    // 2-1. 범위를 초과하면 return -1
    if (cnt > 10000000) return -1;

    // 3. 새로운 이전 디스크에 추가한다.
    disk++;
  }
  return cnt;
}
