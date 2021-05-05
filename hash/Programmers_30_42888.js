//https://programmers.co.kr/learn/courses/30/lessons/42888
//제출답안
function solution(record) {
  const answer = [];
  const idTable = {};
  const msgTable = { 'Enter': '들어왔습니다.', 'Leave': '나갔습니다.' };

  for (const log of record) {
    const [action, id, name] = log.split(' ');
    if (action !== 'Change')
      answer.push([action, id]);
    if (action != 'Leave')
      idTable[id] = name;
  }

  return answer.map((data) => {
    const [action, id] = data;
    return `${idTable[id]}님이 ${msgTable[action]}`;
  });
}

//개선
function solution(record) {
  const answer = [];
  const idTable = {};
  const msgTable = { 'Enter': '님이 들어왔습니다.', 'Leave': '님이 나갔습니다.' }; //'님이'가 어차피 공통이므로 함께 포함시키기

  for (const log of record) {
    const [action, id, name] = log.split(' ');
    if (action !== 'Change')
      answer.push([action, id]);
    if (name) //Leave 라는 동작 조건을 주는 것 보단, name이 있는 경우에 주는 것이 추후 action종류가 늘어났을 때 대응가능
      idTable[id] = name;
  }

  return answer.map((data) => {
    const [action, id] = data;
    return `${idTable[id]} ${msgTable[action]}`;
  });
}
