//https://programmers.co.kr/learn/courses/30/lessons/12904
//1. 길이 1, 2인 회문은 바로 찾는다. -> 홀수, 짝수인 회문 찾기 위해
//2. 길이 3이상 부터는 가장 바깥의 글자만 비교하여 회문을 판정한다.

function solution(s) {
  if (s.length < 2) return s.length;

  let max = 1;
  const isPalindrome = [...Array(s.length)].map(() => Array(s.length).fill(false));

  //1. 길이 1인 회문
  for (let i = 0; i < s.length; i++) {
    isPalindrome[i][i] = true;
  }

  //2. 길이 2인 회문
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) {
      isPalindrome[i][i + 1] = true;
      max = 2;
    }
  }

  //3. 길이 3이상 회문
  for (let cnt = 3; cnt <= s.length; cnt++) {
    for (let start = 0; start <= s.length - cnt; start++) {
      const end = start + cnt - 1;
      if (isPalindrome[start + 1][end - 1] === true && s[start] === s[end]) {
        isPalindrome[start][end] = true;
        max = cnt;
      }
    }
  }

  return max;
}

console.log(solution("abac"));
console.log(solution("abcdcba")); //7
console.log(solution("abacde")); //3
console.log(solution("abcdcba"))
