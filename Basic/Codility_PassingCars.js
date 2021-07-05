// https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
// 0과 1의 순서쌍의 갯수 세기
// 단, 인덱스 이전인 1과는 쌍이 될 수 없다.

// 제출답안: 0을 기준으로 순서쌍 만들기
// 1. 1의 출현횟수로 히스토그램(역순)을 만든다.
// 2. A를 돌면서 0이 되면 히스토그램의 숫자를 가져와 더한다.
function solution(A) {
  let cnt = 0;
  const histogram = Array(A.length + 1).fill(0);

  for (let i = A.length - 1; i >= 0; i--) {
    if (A[i] === 0) histogram[i] = histogram[i + 1];
    else histogram[i] = histogram[i + 1] + 1
  }

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) cnt += histogram[i];
    if (cnt > 1000000000) return -1;
  }
  return cnt;
}

//유사답안 
// i가 0이면 i 이후에 있는 1들은 모두 i와 쌍이 된다.
// 1. 전체 1의 갯수를 센다.
// 2. A를 돌면서 1을 카운팅한다.
// 3. A를 돌면서 0이 나오면 쌍을 만들고 전체 1의 갯수에서 카운팅된 1을 뺀다

function solution(A) {
    let numOfOne = A.filter((v) => v === 1).length;
    let pairs = 0;
    let cnt = 0;
    for(let i = 0; i<A.length; i++) {
        if(A[i] === 1) cnt++;
        else if(A[i] === 0) {
            numOfOne -= cnt;
            pairs += numOfOne;
            cnt = 0;
        }

        if(pairs > 1000000000) return -1
    }
    numOfOne -= cnt;
    return pairs;
}


//다른 답안: 1을 기준으로 순서쌍 만들기(Java) -> 1을 기준으로 하므로 0의 갯수를 앞에서 부터 세면 된다.
public int solution(int[] A) {
  int pCount = 0;
  int sum = 0;
  for (int i = 0; i < A.length; i++) {
    if (0 == A[i]) pCount++;
    else {
      sum += pCount * A[i];
      if (sum > 1000000000) return -1;
    }
  }
  return sum;
}
