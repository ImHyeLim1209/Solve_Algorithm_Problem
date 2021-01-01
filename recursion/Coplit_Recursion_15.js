//문제: 다차원 배열을 입력받아 1차원 배열로 변환하여 리턴
//입출력 예시
//let output = flattenArr([[1], 2, [3, 4], 5]);
//console.log(output); // --> [1, 2, 3, 4, 5]

function flattenArr(arr) {
  let resultArr = []; //[1,2,3,4,5]
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'number'){
      resultArr.push(arr[i]);
    }else{
      resultArr = resultArr.concat(flattenArr(arr[i]))
    }
  }
  return resultArr;
}
