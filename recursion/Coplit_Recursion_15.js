//문제: 다차원 배열을 입력받아 1차원 배열로 변환하여 리턴
//입출력 예시
//let output = flattenArr([[1], 2, [3, 4], 5]);
//console.log(output); // --> [1, 2, 3, 4, 5]

//풀이1: 배열의 요소를 for문을 돌며 방문하면서 요소의 타입이 number면 push, arry면 재귀하여 결과 배열에 concat한다. 
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


//풀이2: 배열의 첫번째 요소가 number면 return 첫번째요소+나머지 요소, array면 ...arg를 사용하여 head의 배열을 하나 벗긴 뒤 재귀호출
function flattenArr(arr) {
  // base case
  if (arr.length === 0) {
    return [];
  }

  // recursive case
  const head = arr[0];
  const tail = arr.slice(1);
  if (Array.isArray(head)) {
    return flattenArr([...head, ...tail]);
  } else {
    return [head].concat(flattenArr(tail));
  }
}
