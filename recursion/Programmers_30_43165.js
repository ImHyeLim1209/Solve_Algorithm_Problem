//https://programmers.co.kr/learn/courses/30/lessons/43165
//제출답안
function solution(numbers, target) {
  let cnt = 0;
  const aux = (sum, idx) => {
    if (idx === numbers.length) {
      if (sum === target) cnt++;
      return;
    }

    aux(sum + numbers[idx], idx + 1);
    aux(sum - numbers[idx], idx + 1);
  }
  aux(0, 0);
  return cnt;
}

//리팩토링
function solution(numbers, target) {
  const aux = (sum, idx) => {
    if (idx === numbers.length) {
      return sum === target ? 1 : 0;
    }
    let cnt = 0; //여기서 cnt 선언!
    cnt += aux(sum + numbers[idx], idx + 1); //+현재숫자 일 때 경우의 수
    cnt += aux(sum - numbers[idx], idx + 1); //-현재숫자 일 때 경우의 수
    return cnt; //꼭 있어야 최종 리턴 값 있음
  }
  return aux(0, 0);
}
