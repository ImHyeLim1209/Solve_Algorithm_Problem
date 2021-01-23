//https://programmers.co.kr/learn/courses/30/lessons/42576
//////////////////////////////////
//1. 단순 2중 for문 풀이 -> 8byte * 100,000명 ^2 = 약 9GB * 8로 시간초과
function solution(participant, completion) {
  const tempArr = participant.slice();
  
  completion.forEach(compltedPlayer => {
    tempArr.some( (target, idx, arr) => {
        if(compltedPlayer === target){
            arr[idx] = '';
            return true;
        }
    })
  });

  return tempArr.join('');
}


///////////////////////////////
//2. Hash Table을 만들어서 풀기
const countValues = (arr) => {
  const countTable = {}
  arr.forEach(element => {
    if(countTable[element] === undefined) {
      countTable[element] = 0;
    }
    countTable[element]++;
  });
  return countTable;
}

function solution(participant, completion) {
  let result = '';
  const participantTable = countValues(participant);

  completion.forEach(element => {
    participantTable[element]--;
  });

  for(let key in participantTable){
    if(participantTable[key] > 0){
      result = key;
      break;
    }
  }
  return result;
}


////////////////////////////////////////////
//3. 간단하게 줄이기 + 완주한 사람들의 빈도를 Table로 만들고 Participant에서 찾기
function solution(participant, completion) {
  const completionTable = completion.reduce((table, cur) => (
    table[cur] === undefined? table[cur] = 1 : table[cur]++, table
  ), {});

  return participant.find((element) => {
    if(completionTable[element]) 
      completionTable[element]--;
    else //빈도가 0이거나 undefined라면
      return true;
  })
}
