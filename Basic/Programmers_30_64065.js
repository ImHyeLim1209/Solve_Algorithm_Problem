//https://programmers.co.kr/learn/courses/30/lessons/64065
//제출답안
function solution(s) { //split에도 정규표현식을 쓸 수 있다!
  const sets = s
    .split(/[{}]/) 
    .filter((str) => /[0-9]/.test(str))
    .sort((a, b) => a.length - b.length);
  return sets.reduce((acc, cur) => {
    const chars = cur.split(',').map((value) => parseInt(value));
    const newChar = chars.filter((char) => !acc.includes(char))[0];
    acc.push(newChar);
    return acc;
  }, []);
}

//리팩토링
function solution(s) {
  const toNumbers = (str) => str.split(',').map((value) => parseInt(value)); //'1,2'를 [1, 2]로 바꾸는 함수
  return s
    .split(/[{}]/)
    .filter((str) => /[0-9]/.test(str))
    .map((value) => toNumbers(value))
    .sort((a, b) => a.length - b.length)
    .reduce((acc, cur) => {
      const newChar = cur.filter((char) => !acc.includes(char))[0]; //이것도 사실 newChar에 할당 안하고 바로 return 배열에 넣으면 된다.
      return [...acc, newChar]; //push로 안하고 spreadoperator로 할 수 있다!
    }, []);
}
