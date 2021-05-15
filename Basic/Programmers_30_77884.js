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
