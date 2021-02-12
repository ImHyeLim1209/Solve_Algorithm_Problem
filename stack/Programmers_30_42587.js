//https://programmers.co.kr/learn/courses/30/lessons/42587
//방법1. Priority 순으로 정렬한 배열과 Job 배열을 따로 만들어서 Priority 순 배열의 요소를 꺼내 인쇄할지 안할지 체크
//순서를 찾아야 하는 target을 구분하기 위해 isTarget을 따로 만든다.
function solution(priorities, location) {
  var count = 0;

  let priorityArray = Object.values(priorities).sort((a, b) => (b - a));
  let jobArray = priorities
    .map((job, idx) => ([job, idx === location]));

  let first = priorityArray.shift();

  while (jobArray.length > 0) {
    let [priority, isTarget] = jobArray.shift();

    if (first === priority) {
      count++;
      first = priorityArray.shift();
      if (isTarget) {
        return count;
      }
    } else {
      jobArray.push([priority, isTarget]);
    }
  }
}

//방법2. 매번 some을 통해 현재 작업보다 우선순위가 높은 작업이 있는지 확인.
//위 방법보다 살짝 오래걸릴 수 있음 (매번 some을 하면서 하므로 O(N)인 작업이 몇 개 추가)
//배열의 갯수가 하나 줄어들었기 때문에 보기는 더 좋은 것 같다.
function solution(priorities, location) {
  var count = 0;

  let jobArray = priorities
    .map((job, idx) => ([job, idx === location]));
  while (jobArray.length > 0) {
    let [priority, isTarget] = jobArray.shift();

    if (jobArray.some((job) => (job[0] > priority))) { jobArray.push([priority, isTarget]); }
    else {
      count++;
      if (isTarget) { return count; }
    }
  }
}
