// https://programmers.co.kr/learn/courses/30/lessons/81301
// 제출1. 하나 X
function solution (s) {
   const hash = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  };

  const keys = Object.keys(hash);

  const isDigit = (c) => {
    return c >= '0' && c <= '9';
  };

  let result = '';
  let acc = '';

  let idx = 0;
  while (idx < s.length) {
    if (keys.includes(acc)) { // 얘가 여기 있으면 예외인 케이스가 있는듯...? 뭔지는 잘 모르겠다..
      result += hash[acc];
      acc = '';
    }

    if (isDigit(s[idx])) result += s[idx];
    else acc += s[idx];
    idx++;
  }
  return Number(result + (hash[acc] ? hash[acc] : ''));
}


// 제출2: 수정O
function solution (s) {
   const hash = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9
  };

  const keys = Object.keys(hash);

  const isDigit = (c) => {
    return c >= '0' && c <= '9';
  };

  let result = '';
  let acc = '';

  let idx = 0;
  while (idx < s.length) {
    if (isDigit(s[idx])) result += s[idx];
    else {
        acc += s[idx];
        if (keys.includes(acc)) {
        result += hash[acc];
        acc = ''; }
    }
    idx++;
  }
  return Number(result);
}

// 다른풀이: 정규표현식
function solution(s) {
    s = s.replace(/zero/gi, 0)
    .replace(/one/gi, 1)
    .replace(/two/gi, 2)
    .replace(/three/gi, 3)
    .replace(/four/gi, 4)
    .replace(/five/gi, 5)
    .replace(/six/gi, 6)
    .replace(/seven/gi, 7)
    .replace(/eight/gi, 8)
    .replace(/nine/gi, 9)
    return parseInt(s);
}
