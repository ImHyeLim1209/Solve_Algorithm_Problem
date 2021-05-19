//https://programmers.co.kr/learn/courses/30/lessons/12985
//제출답안: 마지막라운드 부터 하나씩 빼나간다.
function solution(n, a, b) {
  const getTotalRound = (n) => { //Math.log2()로 대체할 수 있다.
    let num = 0;
    while (n > 1) {
      num++;
      n = parseInt(n / 2);
    }
    return num;
  }

  const isInsideRange = (start, end, x) => {
    return start <= x && x <= end;
  }

  let round = getTotalRound(n); //총 라운드 수. 8인 경우 3이다.
  let start = 0;
  let end = n;
  while (round > 1) {
    const mid = parseInt((start + end) / 2); //2로 나눈 범위에서 각각 a와 b가 포함되는지 확인한다.
    const [isInsideLeftA, isInsideLeftB] = [isInsideRange(start, mid, a), isInsideRange(start, mid, b)]; 
    const [isInsideRightA, isInsideRightB] = [isInsideRange(mid + 1, end, a), isInsideRange(mid + 1, end, b)];

    if (isInsideLeftA && isInsideLeftB) { //둘 다 한 쪽 범위 내에 있다면 round를 더 줄일 수 있다.
      round--;
      end = mid;
    } else if (isInsideRightA && isInsideRightB) {
      round--;
      start = mid + 1;
    } else { //둘이 다른 범위에 있다면 이번 라운드가 답이된다.
      return round;
    }
  }
  return round;
}


//다른 답안1
function solution(n,a,b)
{
    let answer = 0;
    while(a !== b) { //이겼을 때 다음 번호가 동일하다면 해당 라운드에서 둘이 붙은 것이다.
        a = Math.ceil(a/2); //처음에 8번이었다면 다음엔 4번 -> 2번 -> 1번이 될 것이다.
        b = Math.ceil(b/2); //처음에 7번 이었다면 다음엔 4번 -> 2번 -> 1번이 될 것이다.
        answer++;
    }
    return answer;
}





