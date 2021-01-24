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
function solution(n, lost, reserve) { 
  const realLostList = lost.filter((value) => (!reserve.includes(value)));
  let realReserveList = reserve.filter((value) => (!lost.includes(value)));
  
  return n - realLostList.filter(lostStudent => {
    const lendStudent = realReserveList.find((reserveStudent) => Math.abs(reserveStudent - lostStudent) === 1);
    if(!lendStudent)  return true; //find에서 못찾았다면 return undefined
    realReserveList = realReserveList.filter( (reserveStudent) => (reserveStudent != lendStudent) )
  }).length;
}
