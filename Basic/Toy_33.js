//정수를 요소로 갖는 문자열을 입력받아 다음의 조건을 만족하는 LIS*의 길이를 리턴
//LIS: 배열의 연속되지 않는 부분 배열 중 모든 요소가 엄격하게 오름차순으로 정렬된 가장 긴 부분 배열
//[3, 10, 2, 1, 20] ->  3 (3, 10, 20)

//제출답안: 모든 LIS를 구한 후 최대 길이를 다시 구한다.
const LIS = function (arr) {
  const LISs = [];

  const aux = (acc, len, candidate) => {
    if (acc.length >= len) {
      LISs.push(acc);
      return;
    }
    candidate.forEach((value, idx) => {
      if (acc.length === 0 || acc[acc.length - 1] < value)
        aux(acc.concat(value), len, candidate.slice(idx + 1));
    });
  }

  arr.forEach((_, idx) => {
    aux([], idx + 1, arr);
  })

  return LISs.reduce((acc, arr) => {
    if (arr.length > acc)
      acc = arr.length;
    return acc;
  }, 0)
};

//리팩토링1: 숫자만 저장하기
const LIS = function (arr) {
  const LISs = [];

  const aux = (acc, len, candidate) => {
    if (acc.length >= len) {
      LISs.push(len);
      return;
    }
    candidate.forEach((value, idx) => {
      if (acc.length === 0 || acc[acc.length - 1] < value)
        aux(acc.concat(value), len, candidate.slice(idx + 1));
    });
  }

  arr.forEach((_, idx) => {
    aux([], idx + 1, arr);
  })

  return LISs.reduce((acc, value) => { //Math.max(...LISs) 보다 reduce 하는게 더 빠르다
    return value > acc ? value : acc
  }, 0);
};

//리팩토링2: 하나의 답을 찾으면 끝낸다.
const LIS = function (arr) {
  const LISs = [];

  const aux = (acc, len, candidate) => {
    if (acc.length >= len) {
      return true;
    }

    for (let i = 0; i < candidate.length; i++) { //foreach로 하면 리턴해도 다음 반복이 진행되므로 반드시 for문으로 바꿀 것!
      if (acc.length === 0 || acc[acc.length - 1] < candidate[i]) {
        const result = aux(acc.concat(candidate[i]), len, candidate.slice(i + 1));
        if (result) return result;
      }
    }
    return false;
  }

  let max = 1;
  arr.forEach((_, idx) => { //사실 result가 false라면 그 이후는 볼 필요도 없이 모두 false가 될 것. 코드를 예쁘게 넣을 수 있으면 해당 부분도 추가하자
    const result = aux([], idx + 1, arr);
    if (result) max = idx + 1;
  })

  return max; //길이 순서대로 구하므로 마지막 요소가 무조건 가장 크다
};

//레퍼런스: 가장 큰 숫자를 하나 정하고 그 숫자를 기준으로 앞의 숫자를 찾는다.
const LIS = function (arr) {
  const N = arr.length;
  // lis[i]는 i에서 끝나는 LIS의 길이를 저장
  // 최소한 각 요소 하나로 LIS를 만들 수 있으므로 1로 초기화한다.
  const lis = Array(N).fill(1);
  for (let i = 1; i < N; i++) {
    // i에서 끝나는 LIS의 길이
    for (let j = 0; j < i; j++) {
      // i 이전의 인덱스만 검사하면 된다.
      // i는 1부터 시작하므로, 짧은 길이부터 검사한다. (bottom-up 방식)
      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) { //항상 j < i
        lis[i] = lis[j] + 1; 
      }
    }
  }
  return Math.max(...lis);
};
