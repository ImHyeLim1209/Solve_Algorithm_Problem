//https://programmers.co.kr/learn/courses/30/lessons/12909

//풀이1. stack 사용
function solution(s) {
  const stack = [];
  const openChar = '(';
  const closeChar = ')';
  s.split('').forEach((char) => {
    if (char === closeChar && stack[stack.length - 1] === openChar) stack.pop();
    else stack.push(char);
  });
  return stack.length === 0;
}

//풀이2. count 사용
function solution(s) {
  let rest = 0; //없애야 하는 열린 괄호 수
  const openChar = '(';
  for (let char of s) {
    rest += char === openChar ? 1 : -1;
    if (rest < 0) return false; //음수가 되었다는 것은 열린괄호 수보다 닫힌 괄호수가 더 많았다는 것 -> 잘못된 괄호가 있음!
  }
  return rest === 0;
}
