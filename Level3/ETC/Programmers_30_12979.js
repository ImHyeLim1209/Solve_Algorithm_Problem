//https://programmers.co.kr/learn/courses/30/lessons/12979

// 전파 도달 거리 W
// 모든 아파트에 전파를 전달하기 위해 증설해야 할 기지국 개수의 최솟값
// stations는 오름차순으로 정렬

// N이 2억이므로 효율적인 방법이 필요
// O(N) 무식하게 처음부터 설치 안 된 곳에 설치한다. 전파 범위를 true/false로 저장한다. -> 좀 아슬아슬할듯
// O(LogN) 기지국 갯수를 BinarySearch 한다. 확인하는 부분이 조금 어렵다.

// station을 기준으로 여러 개의 구간으로 나눈다. (각 구간은 모두 전파 false인 구간)
// 각 구간을 binarySearch하여 최소의 설치 숫자를 찾는다.
// -> Binary Search할 필요도 없다. 모두 전파가 안 닿는 곳이기 때문에 전파유효범위의 나눗셈의 몫이 기지국 설치 갯수가 된다.
function solution(n, stations, w) {

  // 1. 구간 나누기
  const ranges = [];

  let start = 1;
  for (const station of stations) {
    ranges.push([start, station - w - 1]);
    start = station + w + 1;
  }
  ranges.push([start, n]);

  // 2. 각 구간에 기지국 설치하기
  let cnt = 0;
  const wave = w * 2 + 1;
  for (const range of ranges) {
    const width = range[1] - range[0] + 1;
    cnt += Math.ceil(width / wave);
  }

  return cnt;
}

console.log(solution(16, [9], 2)); //3
console.log(solution(11, [4, 11], 1)); //3
