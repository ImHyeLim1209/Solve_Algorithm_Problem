/////////////////////////////////////////////
//1. 더한 값을 배열에 넣을 때부터 정렬해서 넣기
const insertWithSorted = (arr, value) => { //가독성이 별로인 것 같다.
  if(arr.length < 1){
      arr.push(value);
  }else{
      let idx = 0;
      for(let i = 0; i<arr.length; i++){
          if(arr[i] < value){
              idx = i+1;
          }else if(arr[i] === value){
              return;
          }
      }
      arr.splice(idx, 0, value);
  }
}

function solution(numbers) {
  var answer = [];
  for(let i = 0; i < numbers.length-1; i++){
    for(let j = i+1; j<numbers.length; j++){
      let value = numbers[i] + numbers[j];
      insertWithSorted(answer, value);
    }
  }
  return answer;
}

/////////////////////////////////////////////
//2. 더한 값을 다 넣어준 후 중복제거 후 Sort
function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }
    
    const answer = [...new Set(temp)]
    return answer.sort((a, b) => a - b)
}
