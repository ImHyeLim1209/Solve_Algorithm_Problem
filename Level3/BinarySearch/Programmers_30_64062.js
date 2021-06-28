// https://programmers.co.kr/learn/courses/30/lessons/64062
//풀이1. 문제에 나온 그대로 구현 -> 효율성 X
// 1. 0을 제외하고 가장 작은 숫자 min를 찾는다.
// 2. 배열의 모든 숫자에서 min을 빼고, 그만큼 결과 cnt에 ++
// 3. 처리 후 배열에서 0이 연속으로 k 이상있다면 끝.
//    없는 경우 1부터 다시 시작
function solution(stones, k) {
  const getMinNumber = (array) => {
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== 0 && min > array[i]) min = array[i];
    }
    return min;
  }

  const getContinuousZero = (array) => {
    let max = 0;
    let cnt = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] === 0) cnt++;
      else {
        if (max < cnt) max = cnt;
        cnt = 0;
      }
    }
    return max;
  }

  let cnt = 0;
  let zeros = getContinuousZero(stones);
  while (zeros < k) {
    const min = getMinNumber(stones);
    stones = stones.map((v) => v !== 0 ? v - min : 0);
    cnt += min;
    zeros = getContinuousZero(stones);
  }
  return cnt;
}

//풀이2. 이분탐색 이용
// 건널 수 있는 인원을 이분탐색 한다. (max = 배열 중 최대값, min = 배열중 최소값)
// 문제에서 항상 가장 가까운 돌(0 이상)로 이동해야 한다고 했으므로 항상 1칸씩 움직이는 것을 최선으로 함
// 인원 체크 방법: 0이된 연속된 돌의 수가 k개 이상이라면 false
//                k = 1일 때 mid명이 건널 수 있는지 확인하려면 모든 돌의 값이 mid 이상이어야 한다.
//                mid명이 건널 수 있는지 확인하려면 mid명이 건너는 도중에 0이된 연속된 돌의 수가 k개 미만이어야 한다.
//                즉, mid 이하의 연속된 k개 이상 돌이 있으면 이들은 mid명이 건너는 도중에 0이 되므로 mid명이 건널 수 없는 경로이다.
function solution(stones, k) {
  const getRange = (array) => {
    let max = 0;
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < array.length; i++) {
      if (min > array[i]) min = array[i];
      if (max < array[i]) max = array[i];
    }
    return [min, max];
  }

  const checkStones = (mid) => {
    let cnt = 0;
    for (let i = 0; i < stones.length; i++) {
      if (stones[i] <= mid) cnt++;
      else cnt = 0;
      if (cnt === k) return false;
    }
    return true;
  }

  let [min, max] = getRange(stones);
  let mid

  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    if (checkStones(mid)) min = mid + 1;
    else max = mid - 1;
  }
  return min;
}
