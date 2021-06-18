//https://programmers.co.kr/learn/courses/30/lessons/42627
// 가장 짧은 작업을 먼저 실행한다.
// 새로운 작업이 시작하는 순간 가장 짧은 작업을 찾아 실행한다.
// -> 항상 가장 짧은 요소가 root에 있게 하는 우선순위큐(힙)을 구현한다.
// 1. 0초부터 시간이 흐르며, 작업이 들어오면 우선순위 큐에 요소를 넣는다.
// 2. 실행중인 작업이 없어지면 지금 큐에서 root 요소를 가져온다.
// 대기시간 = 실제 시작시간 - 요청시간 + 작업시간
function solution (jobs) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  const getParentIdx = (idx) => {
    return parseInt((idx - 1) / 2);
  };

  const getLeftChildIdx = (idx) => {
    return idx * 2 + 1;
  };

  const push = (heap, item) => {
    // 일단 가장 마지막에 넣고 부모와 비교해나간다.
    let idx = heap.length;
    let pIdx = getParentIdx(idx);
    heap.push(item);
    while (heap[pIdx][1] > heap[idx][1]) {
      swap(heap, idx, pIdx);
      idx = pIdx;
      pIdx = getParentIdx(idx);
    };
    return heap;
  };

  const pop = (heap) => {
    // 마지막 요소를 root와 바꾼 후 마지막 요소를 뺀다.
    // root가 된 마지막 요소는 자식들과 비교해 나간다.
    swap(heap, 0, heap.length - 1);
    const value = heap.pop();
    if (heap.length === 0) return value;

    let idx;
    let minIdx = 0;
    while (idx !== minIdx) {
      idx = minIdx;
      const left = getLeftChildIdx(idx);
      const right = left + 1;
      // 2 개의 자식노드 중 더 작은 요소랑 교환
      if (left < heap.length && heap[minIdx][1] > heap[left][1]) minIdx = left;
      if (right < heap.length && heap[minIdx][1] > heap[right][1]) minIdx = right;

      swap(heap, idx, minIdx);
    }
    return value;
  };

  // 요청 시간순으로 정렬한다.(nlogn)
  jobs.sort((a, b) => a[0] - b[0] === 0 ? a[1] - b[1] : a[0] - b[0]);
  let idx = 0;
  let time = 0;
  let waitTime = 0;
  let cnt = 0;
  const heap = [];
  while (cnt < jobs.length) {
    // time에 해당하는 요소들을 heap에 넣는다.
    while (idx < jobs.length) {
      if (jobs[idx][0] > time) break;
      push(heap, jobs[idx]);
      idx++;
    }

    // 작업이 없다면 새로운 작업을 시작한다.
    if (heap[0] && heap[0][0] <= time) {
      // 대기시간 = 실제 시작시간 - 요청시간 + 작업시간
      const currentJob = pop(heap);
      const [requestTime, workTime] = currentJob;
      waitTime += time - requestTime + workTime;
      time += currentJob[1];
      cnt++;
    } else {
      time = jobs[idx][0];
    }
  }
  return parseInt(waitTime / jobs.length);
}

console.log(solution([[0, 9], [0, 4], [0, 5], [0, 7], [0, 3]])); // 13

// 기타사항
// 내가 구현한 힙이 이상해서 그런지 잘은 모르겠지만 큐에 요소가 들어올 때마다 sort(퀵정렬 )을 해도 실행 시간에 큰 차이가 없다..!
