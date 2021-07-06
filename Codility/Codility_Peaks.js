// 1. peak들의 배열 peaks를 구한다.
// 2. 가능한 답의 범위는 1~peaks.length
// 3. 답의 범위로 binary search한다.
//  => N이 x의 약수가 아니면 x는 답이 될 수 없음 -> binary search 문제 생길수도
function solution(A) {
  if (A.length <= 2) return 0;
  //else if (A.length <= 5) return 1;

  const peaks = [];
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) peaks.push(i);
  }

  if (peaks.length === 0) return 0;

  const checkPossible = (arr, peaks, cnt) => {
    if (arr.length % cnt !== 0) return false;
    let num = arr.length / cnt;
    let rangeIdx = 0;
    let peakIdx = 0;

    while (peakIdx < peaks.length && rangeIdx < cnt) {
      const [start, end] = [rangeIdx * num, (rangeIdx + 1) * num - 1];
      const peak = peaks[peakIdx];
      if (start <= peak && peak <= end) {
        rangeIdx++;
        peakIdx++;
      } else {
        peakIdx++;
      }
    }
    return rangeIdx === cnt;
  }

  let answer = peaks.length;
  while (answer > 1) {
    if (checkPossible(A, peaks, answer)) return answer;
    answer--;
  }
  return 1;
}

console.log(solution([[0, 1000000000]])) // 0
console.log(solution([1, 3, 2, 1])); // 1


//문제 주의점: 문제를 잘 읽어보면 
// If A cannot be divided into some number of blocks, the function should return 0 라는 문장이 있다.
// 의미는 블럭을 나눌 수 없다면 return 0을 하라는 뜻으로,
// 배열의 길이가 1, 2라서 피크가 존재하지 않는 경우 블록을 나눌 수 없다. 따라서 return 0이라는 의미로 해석해야 한다.
// 그 외에 피크가 존재하지만 나눌 수 없는 배열의 길이가 4-5인 경우는 피크가 없다면 return 1을 해주어야 한다.
