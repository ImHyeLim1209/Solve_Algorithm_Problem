//https://programmers.co.kr/learn/courses/30/lessons/12936
//제출답안
function solution(n, k) {
  let arr = [...Array(n + 1)].fill(false);
  arr[0] = true;

  let answer = [];
  const getFactorial = (N) => {
    let result = 1;
    for (let i = N; i > 0; i--) {
      result *= i;
    }
    return result;
  }

  const expressFactorial = (N, k) => {
    for (let i = 0; i < N - 2; i++) {
      const facNum = getFactorial(N - i - 1)
      const quo = parseInt((k - 1) / facNum);
      answer.push(quo);
      k -= facNum * quo;
    }
    return k;
  }

  const getValidNumByIdx = (idx) => {
    for (let i = 1; i < arr.length; i++) {
      if (!arr[i]) idx--;
      if (idx === 0) {
        arr[i] = true;
        return i;
      };
    }
    return -1;
  }

  const remainArr = (left) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
      if (!arr[i]) result.push(i);
    }
    return left === 1 ? result : result.reverse();
  }

  const left = expressFactorial(n, k);
  answer = answer.map((idx) => getValidNumByIdx(idx + 1));
  answer = answer.concat(remainArr(left));
  return answer;
}

//다른 답안
function solution(n, k) {
  const answer = [];
  const memoFactorial = {
    0: 1,
    1: 1
  };

  const factorial = (n) => {
    if (memoFactorial[n] == undefined) {
      memoFactorial[n] = n * factorial(n - 1);
    }
    return memoFactorial[n];
  }

  let arr = new Array(n).fill().map((_, i) => i + 1);
  while (n > 0) {
    let fac = factorial(n) / n;
    answer.push(...arr.splice(Math.floor((k - 1) / fac), 1));
    n--;
    k -= fac * Math.floor((k - 1) / fac);
  }
  return answer;
}
