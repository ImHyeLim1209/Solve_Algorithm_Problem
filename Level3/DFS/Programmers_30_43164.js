// https://programmers.co.kr/learn/courses/30/lessons/43164
function solution(tickets) {
  tickets.sort();
  const isUsed = Array(tickets.length).fill(false);
  let path;
  const aux = (start, history, isUsed) => {
    if (isUsed.filter((value) => !value).length === 0) {
      path = [...history, start];
      return true;
    }

    for (let i = 0; i < tickets.length; i++) {
      let result = false;
      if (isUsed[i] === false && tickets[i][0] === start) {
        isUsed[i] = true;
        result = aux(tickets[i][1], [...history, start], isUsed);
        isUsed[i] = false;
      }
      if (result)
        return true;
    }
    return false;
  }
  aux('ICN', [], isUsed);
  return path;
}

// 포인트
// 1. 티켓은 1회용이므로 한 번 사용하면 더 이상 사용할 수 없다.
// 2. 미리 sort를 하면 dfs는 순서대로 찾는다. ex. 답이 문자열 순으로 나와야 한다면 미리 문자열순으로 sort하자
