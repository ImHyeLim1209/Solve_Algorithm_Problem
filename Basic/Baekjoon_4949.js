//https://www.acmicpc.net/problem/4949
//제출답안
//백준 node.js 한 줄 입력 받기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function solution(s) {
  //1. 괄호를 저장할 stack을 만든다.
  //2. s의 문자를 하나씩 꺼내면서 stack에 담는다.
  //2-2. 닫는 괄호라면 stack에서 마지막 요소를 pop()한다.
  //2-1. 여는 괄호라면 넣는다.
  //2-2-1. 마지막 요소가 닫는 괄호라면 return false;
  //2-2-2. 마지막 요소가 여는 괄호라면 continue;
  //3. stack이 비었다면 모든 괄호가 맞아떨어진 것
  const stack = [];
  const openBrackets = ['(', '['];
  const closeBrackets = [')', ']'];
  const bracketPair = { ')': '(', ']': '[' };
  for (let i = 0; i < s.length; i++) {
    const curChar = s[i];
    if (openBrackets.includes(curChar)) {
      stack.push(curChar);
    } else if (closeBrackets.includes(curChar)) {
      const lastChar = stack.pop();
      if (lastChar !== bracketPair[curChar]) return false;
    }
  }
  return stack.length === 0;
};

for (let i = 0; i < input.length; i++) {
  if(input[i] === '.') break;
  solution(input[i]) ? console.log('yes') : console.log('no');
};
