//괄호 짝맞추기 문제
///////////////////////////////////
//풀이1. 
const checkIsPairBracket = (char1, char2) => { //두 개의 문자가 짝이 맞는 괄호인지 확인
  const brackets = [['[', ']'], ['{', '}'], ['(', ')']];

  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i].includes(char1) && brackets[i].includes(char2)) { //같은 타입의 괄호인가
      return brackets[i][0] === char1 && brackets[i][1] === char2; //괄호의 순서가 맞는가
    }

  }
  return false;
}

const balancedBrackets = function (str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]); //일단 Stack에 넣는다.

    while (stack.length >= 2) {
      if (checkIsPairBracket(stack[stack.length - 2], stack[stack.length - 1])) { //스택에서 마지막 2개의 요소가 짝이 맞는 괄호인지 확인
        stack.pop(); //짝이 맞으면 pop
        stack.pop();
      } else {
        break;
      }
    }
  }

  return stack.length === 0;
};

///////////////////////////////////
//풀이2. 닫는 괄호일 때만 확인한다.
const balancedBrackets = function (str) {
  const bracketPairs = { //hash로 짝 괄호를 바로 구한다.
    '(': ')',
    '{': '}',
    '[': ']'
  };
  const opener = ['(', '{', '[']; //여는괄호
  const closer = [')', '}', ']']; //닫는괄호
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (opener.includes(str[i])) { //여는괄호는 일단 stack에 넣는다.
      stack.push(str[i]);
    } else { //닫는괄호라면 스택의 마지막 요소와 짝이 되는지 확인한다.
      const top = stack.pop();
      if (bracketPairs[top] !== str[i]) return false;
    }
  }

  return stack.length === 0;
};
