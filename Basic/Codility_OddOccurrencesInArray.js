// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
// 1. hash에 숫자가 몇 번 나왔는지 센다.
// 2. 홀수 번 나온 숫자를 리턴한다.

function solution(A) {
  const hash = {};
  for (let i = 0; i < A.length; i++) {
    const key = A[i];
    hash[key] = hash[key] ? hash[key] + 1 : 1;
  }

  for (const property in hash) {
    if (hash[property] % 2 === 0) continue;
    return Number(property);
  }
  return -1;
}

// 깨달은 점: Object.entries(hash)로 변환해서 find, map하는 것보다 for in으로 찾는게 빠르다.
// (당연히 변환 과정이 없으니까 빠름. 괜히 entries 변환 하지말고 for문 돌리자...)

// hash 더 간단히 만들기: reduce를 사용한다.
const totalCounter = A.reduce((counter, num) => {
  counter[num] = counter[num] ? counter[num] + 1 : 1;
  return counter;
}, {});
