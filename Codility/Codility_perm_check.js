// https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
// 방법1) set으로 중복 제거 후 max를 잘 구해서 없는 숫자를 센다. -> has도 N 걸려서 N^2 나오거나, hash처럼 1 걸려서 2N
function solution(A) {
  const set = new Set(A);
  const max = Math.max(...A, A.length); // 사실 Math일 필요 없고 그냥 A.length로 됨
  for (let i = 1; i <= max; i++) {
    if (!set.has(i)) return 0;
  }
  return 1;
}

// 방법2) set으로 중복 제거 후 set의 요소들이 1~N까지의 합인지 확인한다.
function solution(A) {
    const set = new Set(A);
    const N = A.length;
    let sum = (N * (N+1)) / 2;

    for(const num of set) {
        sum -= num;
    }
    return sum === 0? 1 : 0;
}
