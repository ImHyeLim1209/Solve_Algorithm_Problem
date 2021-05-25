//https://programmers.co.kr/learn/courses/30/lessons/43163
//제출답안
function solution(begin, target, words) {
  const isVisited = {};
  const queue = {
    storage: Array(words.length + 1).fill(false),
    front: 0,
    rear: 0,
    isEmpty: function () { return this.front === this.rear; },
    enqueue: function (value) { this.storage[this.rear++] = value; },
    dequeue: function () { return this.storage[this.front++]; }
  }

  const getDiffStr = (str1, str2) => {
    let cnt = str1.length;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] === str2[i]) cnt--;
    }
    return cnt;
  }


  queue.enqueue([begin, 0]);

  while (queue.isEmpty() === false) {
    const [str, cnt] = queue.dequeue();

    if (str === target) return cnt;

    const candidates = words.filter((word) => !isVisited[word] && getDiffStr(str, word) === 1);
    candidates.forEach((candidate) => {
      isVisited[candidate] = true;
      queue.enqueue([candidate, cnt + 1]);
    })
  }
  return 0;
}
