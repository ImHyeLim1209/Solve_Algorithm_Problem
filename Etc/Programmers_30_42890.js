//https://programmers.co.kr/learn/courses/30/lessons/42890
//제출답안: BFS로 1개짜리 후보키부터 차례대로 작성하여 확인하기
function solution(relation) {
  const N = relation[0].length;
  const canCandidateKey = (keys) => {
    const hash = {}
    for (let row = 0; row < relation.length; row++) {
      const values = relation[row].reduce((acc, cur, idx) => {
        if (keys.includes(idx)) acc += cur;
        return acc;
      }, '');

      if (hash[values]) return false;
      hash[values] = true;
    }
    return true;
  }

  const result = [];
  const isMinimality = (values) => {
    for (const keys of result) {
      let cnt = 0;
      for (const char of keys) {
        if (values.includes(char)) cnt++;
      }
      if (cnt === keys.length) return false;
    }
    return true;
  }

  const queue = {
    storage: [...Array(100)],
    front: 0,
    rear: 0,
    isEmpty: function () { return this.front === this.rear; },
    enqueue: function (value) { this.storage[this.rear++] = value; },
    dequeue: function () { return this.storage[this.front++]; }
  }
  queue.enqueue([]);

  while (!queue.isEmpty()) {
    const values = queue.dequeue();

    if (canCandidateKey(values) === true && isMinimality(values)) {
      result.push(values);
      continue;
    }

    for (let i = values[values.length - 1] + 1 || 0; i < N; i++) {
      if (values.length === 0) {
        queue.enqueue([...values, i]);
      }
      else if (!values.includes(i) && isMinimality([...values, i])) {
        queue.enqueue([...values, i]);
      }
    }
  }
  return result.length;
}

//다른 답안: 비트연산자 활용하기
//컬럼이 4가지 종류가 있다면 각각 0001, 0010, 0100, 1000이라고 생각한다. (이는 1<<index로 )
function solution(relation) {
    const cols = relation[0].length;

    const check = 1 << cols; //1*2^col 개만큼 경우의 수가 존재한다.(2*2*2*2 0또는1씩 4자리)
    const answer = new Set();

    for(let i = 1; i < check; i++){
        //각 컬럼과 i(0001~1111)을 &연산 하여 1이 있는 컬럼의 값들만 가져와서 join한다.
        //즉, 후보키에 따른 값들을 string으로 합친 것
        let temp = relation.map(x=>x.filter((_,index)=>i & (1<<index)).join("")); //비트연산자 &는 둘 다 1일 때 1을 리턴한다. ex. 101 & 100 = 100
        const set  = new Set(temp); //중복을 제거

        if(temp.length === set.size) answer.add(i); //중복 제거 전 후가 동일하다면 후보키가 맞다.
    }

    for( let x of answer){
        for ( let y of answer){
            if(x >= y) continue;
            if((x & y) === x) answer.delete(y); //최소성을 만족하지 못하는 요소를 제거
        }
    }
    return answer.size;
}
