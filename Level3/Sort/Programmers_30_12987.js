// https://programmers.co.kr/learn/courses/30/lessons/12987

// 모든 사원이 무작위로 자연수를 하나씩 부여받아 한 번씩 경기
// 각 팀에서 1명씩 나와 서로의 숫자를 공개. 숫자가 큰 쪽이 +1점 (숫자가 같으면 0점)
// B팀이 최대로 얻을 수 있는 최대 승점?
// 경기 수는 10만이다 -> 제곱하면 안 됨...

//방법1) 예외: [2, 3, 7], [3, 3, 4]
//1. 둘 다 오름차순으로 정렬한다.
//2. B에서 A의 첫번째 요소보다 큰 첫번째 idx 를 찾는다.
//3. idx 이후의 값들만 비교한다.
//4. idx 이전 값들은 모두 진다.

//방법2) 
//1. 둘 다 오름차순으로 정렬한다.
//2. N번 돌면서 순서대로 대결하되, B가 비기거나 지는 경우 B만 ++하여 더 큰 수를 내서 이기도록 한다.
function solution(A, B) {
  const N = A.length;
  const sortedA = [...A].sort((a, b) => a - b);
  const sortedB = [...B].sort((a, b) => a - b);

  let aIdx = 0;
  let bIdx = 0;
  let score = 0;
  for (let i = 0; i < N; i++) {
    if (sortedA[aIdx] < sortedB[bIdx]) {
      aIdx++;
      bIdx++;
      score++;
    } else {
      bIdx++;
    }
  }
  return score;
}

console.log(solution([2, 3, 7], [3, 3, 4])); // 2 -> 2, 3, 7 vs 3, 4, 3
console.log(solution([5, 1, 3, 7], [2, 2, 6, 8])); // 3
console.log(solution([2, 3, 4, 5, 6, 7], [3, 4, 5, 6, 7, 2])) // 5
console.log(solution([1, 2, 3, 4], [1, 2, 3, 4])); // 3
console.log(solution([2, 2, 2, 2], [1, 1, 1, 1])); // 0
