//////////////////////////
//1. 3진법을 사용한 풀이
const fillZeroStr = (str, n) => {
   let numZero = n-str.length;
   return '0'.repeat(numZero) + (str);
}

const rockPaperScissors = function (n) {
 const arr = ['rock', 'paper', 'scissors'];
 const resultArr = [];

 n = n || 3

 for(let i = 0; i < Math.pow(3, n); i++){
   let idxArr =  [...fillZeroStr(i.toString(3), n)];
   let tempArr = idxArr.map((cur) => (arr[cur]))
   resultArr.push(tempArr);
 }

 return resultArr;
};

///////////////////////////////
//2. 재귀를 이용한 풀이
function solution(round) {
  const rps = ["rock", "paper", "sissor"];
  const resultArr= [];

  const recursiveFn = (restRound, untillNow) => {
    if(restRound === 0) {
      resultArr.push(untillNow);
      return;
    }
    
    for(let value of rps) {
      recursiveFn(restRound-1, untillNow.concat(value));
    }
  }

  recursiveFn(round, []);
  return resultArr;
}
