//https://programmers.co.kr/learn/courses/30/lessons/60058

//제출답안
function solution(p) {
  if (p === '') return '';
  const openChar = '(';
  const closeChar = ')';

  const getSeperateIdx = (p) => {
    let openCnt = 0;
    let closeCnt = 0;
    for (let i = 0; i < p.length; i++) {
      if (p[i] === openChar) openCnt++;
      else if (p[i] === closeChar) closeCnt++;

      if (openCnt === closeCnt) return i;
    }
    return -1;
  }

  const isRightStr = (str) => {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === openChar) {
        stack.push(openChar);
      }
      else if (str[i] === closeChar && stack[stack.length - 1] === openChar) {
        stack.pop();
      }
      else {
        stack.push();
      }
    }
    return stack.length === 0;
  }

  const getReverseChar = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      result += str[i] === openChar ? closeChar : openChar;
    }
    return result;
  }

  const aux = (str) => {
    if (str === '') return '';
    const idx = getSeperateIdx(str);
    const u = str.slice(0, idx + 1);
    const v = str.slice(idx + 1, str.length);

    if (isRightStr(u)) {
      return u + aux(v);
    }

    return openChar + aux(v) + closeChar + getReverseChar(u.slice(1, u.length - 1));
  }

  return aux(p);
}


//리팩토링
function solution(p) {
  if (p === '') return '';
  const openChar = '(';
  const closeChar = ')';

  const getSeperateIdx = (str) => { //do-while로 반복문을 돌리며 여닫는 괄호 갯수의 합을 센다(열기는 +, 닫기는 -) 0이 되면 갯수가 같은 것!
    let rest = 0;
    let idx = 0;
    do {
      str[idx++] === openChar ? rest++ : rest--;
    } while (rest !== 0)
    return idx;
  }

  //str은 이미 여/닫는 괄호의 갯수가 동일하므로 처음 시작이 '('라면 올바른 괄호 문자열이다.
  const isRightStr = (str) => {
    return str[0] === openChar;
  }

  const getReverseChar = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      result += str[i] === openChar ? closeChar : openChar;
    }
    return result;
  }

  const aux = (str) => {
    if (str === '') return '';
    const idx = getSeperateIdx(str);
    const u = str.slice(0, idx);
    const v = str.slice(idx, str.length);

    if (isRightStr(u)) {
      return u + aux(v);
    }

    return openChar + aux(v) + closeChar + getReverseChar(u.slice(1, u.length - 1));
  }

  return aux(p);
}
