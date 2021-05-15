//https://programmers.co.kr/learn/courses/30/lessons/77884

//테스트 2,3,5 통과 못함: memoization
//left가 아닌 1부터 모든 약수를 구해야 함 (ex. 10~20일 때 20은 10의 배수(1,2,5)지만 4의 배수이기도 함
function solution(left, right) {
  let answer = 0;
  const memo = Array(right + 1).fill(0); //1을 제외한 약수 갯수 넣기
  const getDivisor = (start, end, num) => {
    let divisorCnt = 0;
    for (let i = start; i <= end / 2; i++) {
      if (num % i === 0) divisorCnt++;
    }
    return divisorCnt + 1;
  }

  const saveMemo = (num, value) => {
    if (num === 1) return;
    for (let i = num; i <= right; i += num) {
      memo[i] += value;
    }
  }

  for (let i = 1; i <= right; i++) {
    let cnt = 0;
    if (memo[i]) {
      cnt = 1;
    } else {
      cnt = getDivisor(2, i, i);
    }
    saveMemo(i, cnt);
    i >= left && (memo[i] + 1) % 2 === 0 ? answer += i : answer -= i;
  }
  return answer;
}

//레퍼런스?
//소인수분해했을 때 제곱수(?) + 1끼리의 곱이 약수의 갯수이다.
//예를들어 12는 2^2 * 3^1 이므로 6개의 약수를 갖고있다.
//제곱으로 딱 나누어 떨어진다는 것은 어떤 수의 2,4,6,8... 제곱이라는 의미이므로 무조건 홀수 개의 약수를 갖는다.
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}
