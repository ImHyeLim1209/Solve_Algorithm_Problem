//https://programmers.co.kr/learn/courses/30/lessons/12906?language=javascript
///////////////////
//1. recude로 새로운 배열에 반복되지 않는 숫자 넣기
function solution(arr) {
  return arr.reduce((acc, cur) => {
    if(acc[acc.length-1] !== cur)  acc.push(cur);
    return acc;
  }, []);
}

///////////////////
//2. filter로 이전 값과 비교해서 같으면 false, 같지 않으면 true
function solution(arr) {
  return arr.filter((value, idx) => (value !== arr[idx-1]))
}
