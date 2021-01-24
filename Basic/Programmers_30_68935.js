//https://programmers.co.kr/learn/courses/30/lessons/68935?language=javascript
//////////////////
//1. 3진법 변환 후 10진법 변환 하기. 진법변환 함수를 만든다.
const convertNotationReverse = (n, target) => {
  const result = [];
  while(target > 0) {
    result.push(parseInt(target % n));
    target = parseInt(target / n)
  }
  return result;
}

const toDecimalNotation = (n, targetArr) => {
    let result = 0;
    let multiplier = 1;
    while(targetArr.length > 0) {
        result += targetArr.pop() * multiplier;
        multiplier *= n;
    }
    return result;
}

function solution(n) {
  const convertedNum = [];
  const reverseNotationArr = convertNotationReverse(3, n);
  return toDecimalNotation(3, reverseNotationArr);
}

//////////////////
//2. toString, parseInt의 진법변환 사용하기
//x.toString(n): Number형 x를 n진법으로 변환한 문자열 리턴
//parseInt(x, n): n진법 문자열형 혹은 Number형 x를 10진법으로 변환 후 Number 리턴
function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(''), 3);
}
