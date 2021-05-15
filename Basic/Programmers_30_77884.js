//https://programmers.co.kr/learn/courses/30/lessons/77884

//테스트 2,3,5 통과 못함: memoization
//4의 약수 갯수를 구했다면 2의 배수인 8, 12, 16에서는 4의 약수 갯수 + x가 된다.
//start에 1이 포함된 것과 포함되지 않은 것을 일반화 하지 못 함
//
function solution(left, right) {
  let answer = 0;
  const memo = Array(right + 1).fill(0);
  const getDivisor = (start, end, num) => {
    let divisorCnt = 0;
    for (let i = start; i <= end / 2; i++) {
      if (num % i === 0) divisorCnt++;
    }
    return divisorCnt + 1;
  }

  const saveMemo = (num, value) => {
    for (let i = num; i <= right; i += num) {
      memo[i] += value;
    }
  }

  for (let i = left; i <= right; i++) {
    let cnt = 0;
    if (memo[i]) {
      cnt = 1;
    } else {
      cnt = getDivisor(1, i, i);
    }
    saveMemo(i, cnt);
    memo[i] % 2 === 0 ? answer += i : answer -= i;
  }
  return answer;
}
