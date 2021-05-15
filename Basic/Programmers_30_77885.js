//https://programmers.co.kr/learn/courses/30/lessons/77885

//제출답안: 10, 11 통과 못함(실패) 왜 인지는 잘 모르겠음
function solution(numbers) {
  const isDiffInTwoBit = (a, b) => {
    const diff = a ^ b; //XOR: 1이 하나여야 1이 나옴 -> 결과비트 중 1이 1개 혹은 2개라면 다른 비트가 1개 혹은 2개인 것이다.
    const diffBit = [...diff.toString(2).padStart(b.toString(2).length, '0')].filter((value) => value === '1').length;
    return diffBit <= 2;
  }

  return numbers.map((number) => {
    for (let i = number + 1; i <= Math.pow(10, 15); i++) {
      if (isDiffInTwoBit(number, i)) return i;
    }
  });
}

//해설 참고하여 작성
//1. 짝수인 경우 마지막 0을 1로 바꾸는 것이 최소이다
//2. 홀수인 경우 어떤 0은 1로, 어떤 1은 0으로 하여 총 2개를 바꾸는 것이 최소이다.
//  0은 가장 작은 자리수의 0을 1로 변경해야한다.(+연산)
//  1은 가장 작은 자리수 다음의 1을 0으로 변경해야 한다.(-연산)
function solution(numbers) {
  const getLowestZero = (num) => {
    const maxLength = num.toString(2).length + 1; //padStr안쓰고 '0' + num.toString(2) 으로 하는 방법도 있음(어차피 한 자리수만 늘어날테니까)
    return [...num.toString(2).padStart(maxLength, '0')].reduce((acc, bit, idx, bits) => {
      if (bit === '0') return Math.pow(2, bits.length - idx - 1);
      return acc;
    }, 0);
  }

  return numbers.map((number) => {
    if (number % 2 === 0) return number + 1;
    const lowestZero = getLowestZero(number);
    return number + lowestZero - (lowestZero / 2);
  });
}
