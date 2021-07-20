//https://programmers.co.kr/learn/courses/30/lessons/68646
// 풍선이 1개만 남을 때까지 계속 터트린다.
// 인접한 두 풍선 중 하나를 터트린다.
// 빈 공간이 없도록 밀착시킨다.
// 번호가 더 작은 풍선을 터트리는 행위는 1번만 가능
// 최후에 남을 수 있는 가능성이 있는 풍선의 갯수 리턴하기
function solution (a) {
  let upMin = a[0];
  let downMin = a[a.length - 1];
  
  let cnt = 2; // 양 끝의 요소는 항상 남을 수 있다.
  // 한 쪽방향이라도 나보다 더 큰 요소가 있다면 남을 수 있는 요소이므로 cnt++
  for (let i = 1; i < a.length - 1; i++) {
    if (a[i] < upMin) {
      upMin = a[i];
      cnt++;
    }
    if (a[a.length - i - 1] < downMin) {
      downMin = a[a.length - i - 1];
      cnt++;
    }
  }
  return cnt - (upMin === downMin ? 1 : 0); //겹치는 cnt는 뺀다
}

console.log(solution([-16, 27, 65, -2, 58, -92, -71, -68, -61, -33]));
console.log(solution([9, -1, -5]));
