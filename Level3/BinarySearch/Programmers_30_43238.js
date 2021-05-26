//https://programmers.co.kr/learn/courses/30/lessons/43238
//제출답안
function solution(n, times) {
  times.sort((a, b) => a - b);
  let min = 0;
  let max = times[times.length - 1] * n;

  while (min <= max) {
    let mid = parseInt((min + max) / 2);
    const cnt = times.reduce((acc, cur) => acc + parseInt(mid / cur), 0);

    //cnt과 n과 같은 경우는 여러개 나올 수 있으므로 cnt를 바로 리턴하지 않고 더 작은 값이 있는지 찾아본다.
    if (cnt < n) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return min;
}
