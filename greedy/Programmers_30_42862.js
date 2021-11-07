//https://programmers.co.kr/learn/courses/30/lessons/42862?language=javascript
////////////////////////
//1. 잃어버린 사람 + 체육복 여분을 보유한 사람으로 구성된 해시테이블을 만든 후 
//전체 학생들에 대해(1~n) 체육복을 갖고 있는 사람 수를 센다.(그 과정 중 체육복이 없는 경우는 빌린다)

function solution(n, lost, reserve) {
  let reserveTable = reserve.reduce((table, student, idx) => (
    table[student] = 2, table
  ), {});

  reserveTable = lost.reduce((table, student, idx) => (
  table[student]? table[student]-- : table[student] = 0, table
  ), reserveTable)

  let studentArr = Array.from({length: n}, (v, i) => i+1);

  return studentArr.reduce( (cnt, student, idx) => {
    if(reserveTable[student] === undefined || reserveTable[student] >= 1){
        return cnt + 1;
    }

    let isBorrow = [student-1, student+1].some((value, idx) => {
        if(reserveTable[value] > 1){
            reserveTable[value]--;
            return true;
        }
        return false;
    })

    return isBorrow? cnt+1 : cnt;

  }, 0);
}

////////////////////////
//전체 학생수 - 잃어버린 학생수
//잃어버린 학생 수 = 빌리지 못한 학생 수
//단, 2개 보유하고 있는 사람도 하나를 잃어버린 경우가 있다 -> 이 경우는 잃어버린 학생, 보유한 학생 리스트에서 먼저 제거되어야 한다.

// 잃어버린 사람의 앞에있는 체육복을 우선으로 빌리기 때문에 sort를 해야한다. (문제에서 학생을 순서대로 안 줄수도 있음)
function solution(n, lost, reserve) {
  const realLost = lost.filter((v) => !reserve.includes(v)).sort((a, b) => a - b);
  let realReserve = reserve.filter((v) => !lost.includes(v)).sort((a, b) => a - b);

  return n - realLost.filter((student) => {
    const lend = realReserve.find((v) => Math.abs(v - student) === 1);
    if (!lend) return true;

    realReserve = realReserve.filter((v) => v !== lend);
    return false;
  }).length;
}

