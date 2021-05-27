//https://programmers.co.kr/learn/courses/30/lessons/12927
//제출답안: 배열의 최대 값에서 1씩 뺀다. 이 때 최대 힙을 이용하여 최대 값이 자동으로 heap[0]에 오게 한다.
function solution(n, works) {
  let sum = works.reduce((acc, cur) => acc + cur);
  if (sum < n) return 0;

  const heap = [];
  const swap = (idx1, idx2, arr) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
  const getParentIdx = (idx) => {
    return Math.floor((idx - 1) / 2);
  }
  const getLeftChildIdx = (idx) => {
    return idx * 2 + 1;
  }
  const insert = (value) => {
    let idx = heap.length;
    heap.push(value);

    let pIdx = getParentIdx(idx);
    while (pIdx >= 0 && value > heap[pIdx]) {
      swap(idx, pIdx, heap);
      idx = pIdx;
      pIdx = getParentIdx(idx);
    }
    return heap;
  }
  const removeRoot = () => {
    swap(0, heap.length - 1, heap);
    heap.pop();

    if (heap.length === 0) return [];
    let idx;
    let maxIdx = 0;
    while (idx !== maxIdx) {
      idx = maxIdx;
      let left = getLeftChildIdx(idx);
      let right = left + 1;

      if (left < heap.length && heap[left] > heap[maxIdx]) maxIdx = left;
      if (right < heap.length && heap[right] > heap[maxIdx]) maxIdx = right;

      swap(idx, maxIdx, heap);
    }
    return heap;
  }

  works.forEach((value) => insert(value));
  for (let i = 0; i < n; i++) {
    const newValue = heap[0] - 1;
    removeRoot();
    insert(newValue);
  }

  return heap.reduce((acc, cur) => acc + cur ** 2, 0);
}

//그외의 해결방법1
function solution(n, works) {
  if(works.reduce((a,b) => a+b) <= n) return 0;
  
  let sorted = works.sort((a,b) => a-b);
  const len = works.length;
  
  while(n) {
    const max = sorted[len-1];
    
    for(let i = len-1; i >= 0; i--) {
      if(sorted[i] >= max) {
        sorted[i]--;
        n--;
      }
      if(!n) break;
    }
  }
  
  return sorted.reduce((a,b) => a + Math.pow(b, 2), 0);
}

//해결방법2
function solution(n, works) {
    const copyWorks = [...works].sort((a, b) => b - a);
    let max = copyWorks[0];
    
    while (n > 0) {
        for (let i=0; i<copyWorks.length; i++) {
            if (max === copyWorks[i]) {
                copyWorks[i] -= copyWorks[i] > 0 ? 1 : 0;
                n--;
            }
            if (!n) break;
        }
        
        max--;
        if (!max) break;
    }
    
    return copyWorks.reduce((acc, cur) => acc + Math.pow(cur, 2), 0);
}
