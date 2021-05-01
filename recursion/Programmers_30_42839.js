//https://programmers.co.kr/learn/courses/30/lessons/42839
//개선사항
//1. isPrime 함수 모듈을 solution 함수 내부에 넣는다.
//2. 모든 경우의 수를 찾을 때 cases를 Set 타입으로 만들어 처음부터 중복이 추가되지 않도록 한다.
//   cases.has(Number(s))=== false) cases.add(Number(s));


const isPrime = (number) => {

  if (number === 1 || number === 0) return false;
  if (number === 2) return true;

  let result = true;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      result = false;
      break;
    }
  }
  return result
}

function solution(numbers) {
  var answer = 0;

  //1. number를 분리한다.
  //2. 모든 경우의 수 찾기
  const allCases = numbers.split('').reduce((acc, _, place, arr) => {
    const cases = [];
    const aux = (values, step, candidate) => {
      if (step === place + 1) {
        cases.push(values);
      }

      candidate.forEach((element, idx) => {
        aux([...values, element], step + 1, [...candidate.slice(0, idx), ...candidate.slice(idx + 1, candidate.length)]);
      });

    }
    aux([], 0, arr);
    return [...acc, ...cases];
  }, []);

  //3. 숫자로 변환
  const numberCases = allCases.map((value) => Number(value.join('')));

  //4. 중복제거
  //5. 소수판별
  const filteredCases = [...new Set(numberCases)]
    .filter((value) => isPrime(value));

  return filteredCases.length;
}
