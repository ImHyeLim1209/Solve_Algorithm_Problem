// https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one

// 시간초과 답안: 매번 배열을 한 번씩 돌아서 사용 안한 요소가 있는지 확인하지 않는 방법 찾아야 함
function solution(X, A) {
  const isExisted = Array(X + 1).fill(false);
  const checkComplete = () => {
    for (let i = 1; i < isExisted.length; i++) {
      if (isExisted[i] === false) return false;
    }
    return true;
  }

  for (let i = 0; i < A.length; i++) {
    isExisted[A[i]] = true;
    if (checkComplete()) return i;
  }
  return -1;
}

// 통과답안: 1~X 까지의 합을 미리 구해놓고 사용한 요소들을 빼가면서 0이 되면 끝난 것이다.
function solution(X, A) {
  const isExisted = Array(X + 1).fill(false); //중복으로 빼면 안되니까!
  let sumValue = (X * (X + 1)) / 2;

  for (let i = 0; i < A.length; i++) {
    if (isExisted[A[i]] === false) {
      sumValue -= A[i];
      isExisted[A[i]] = true;
    }
    if (sumValue === 0) return i;
  }
  return -1;
}

// 다른 답안: 중복을 허용하지 않는 Set을 이용하는 방법.
// 내 생각에는 X를 넘어간 지점의 잎은 세면 안되니까 범위로 if문 만들어서 Set에 add하면 좋을 듯
function solution(X, A) {
  const s = new Set();
  for (let idx = 0, leng = A.length; idx < leng; idx++) {
    const value = A[idx];
    s.add(value);
        
    if (s.size === X) { //중복없이 셌을 때 X와 크기가 같다면 끝!
      return idx;
    }
  }
  return -1;
}
