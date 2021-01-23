//https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript
///////////////////////////////////
//1. reduce로 풀기
function solution(array, commands) {
  return commands.reduce((acc, command) => {
    const [start, end, target] = command; ////////가독성
    acc.push(array.slice(start-1, end).sort((a,b) => (a-b))[target -1]);
    return acc;
  }, []);
}

//////////////////////////////////
//2. map으로 풀기
//이 쪽이 더 나아 보인다.
function solution(array, commands) {
  return commands.map((command) => {
    const [start, end, target] = command;
    return array.slice(start-1, end).sort((a,b) => (a-b))[target -1];
  });
}
