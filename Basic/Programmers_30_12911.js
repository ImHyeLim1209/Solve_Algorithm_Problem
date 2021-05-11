//https://programmers.co.kr/learn/courses/30/lessons/12911

//제출답안
function solution(n) {
  const oneCnt = n.toString(2).split('').filter((value) => value === '1').length;
  let result = oneCnt + 1;
  while (result !== oneCnt) {
    n++;
    result = n.toString(2).split('').filter((value) => value === '1').length;
  }
  return n;
}

//리팩토링1: 정규표현식 사용하기
function solution(n) {
  const oneCnt = n.toString(2).match(/1/g).length;
  let result = oneCnt + 1;
  while (result !== oneCnt) {
    n++;
    result = n.toString(2).match(/1/g).length;
  }
  return n;
}

//리팩토링2: while문에서 바로 return 하기
function solution(n) {
  const oneCnt = n.toString(2).match(/1/g).length;
  do {
    n++;
  } while ((oneCnt !== n.toString(2).match(/1/g).length))
  return n;
}
