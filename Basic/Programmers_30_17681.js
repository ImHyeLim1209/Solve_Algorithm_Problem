//https://programmers.co.kr/learn/courses/30/lessons/17681
///////////////
//1. toString(2) + padStart로 각 요소들을 n비트 2진수 string으로 변환. 해당 요소(0 또는 1)들을 || 연산을 통해 truthy한 값이 있다면 #으로 변환
function solution(n, arr1, arr2) {
  return arr1.map((row, idx) => {
    let arr1Value = row.toString(2).padStart(n, '0');
    let arr2Value = arr2[idx].toString(2).padStart(n, '0');
    return Array.from(arr1Value).map((column, idx) => {
      return parseInt(column) || parseInt(arr2Value[idx]) === 1? "#" : " ";
    }).join('');
  });
}

///////////////
//2. 비트연산자와 정규표현식 사용
// 비트연산자 |, &, ^, <<, >> 를 사용하면 2진수 단위에서 연산이 이루어진다. 
//  예를들어 1|2는 01과 10을 OR연산한 결과인 3을 반환하게 된다.

// 정규표현식을 사용하여 replace 여러번을 간단하게 수행할 수 있다. 
//  예를들어 '10101'.replace('0', ' ')의 결과는 '1 101'이다. 가장 첫번째 '0' 문자에 대해서만 replace가 수행되었기 때문이다.
//  반면 '10101'.replace(/0/g, ' ')의 결과는 '1 1 1'이다. 모든 '0' 문자에 대해서 수행되었기 때문이다.

function solution(n, arr1, arr2) {
  return arr1.map((row, idx) => {
    return (row|arr2[idx]).toString(2).padStart(n, 0).replace(/0/g, ' ').replace(/1/g, '#');
  });
}
