//https://app.codility.com/programmers/lessons/15-caterpillar_method/count_triangles/
// 제출1
// A는 1000개의 요소가 있다.
// 모든 경우의 수를 세도 상관 없을 듯 => 타임아웃.. : 1000 * 999 * 998 / 3 * 2 * 1 가지 경우의 수..
// 3개이므로 O(N^3) 이 풀이는 N이 500까지일 때만 가능
function solution(A) {
  const canTriangle = (dots) => {
    const [a, b, c] = dots;
    if (a + b <= c) return false;
    if (a + c <= b) return false;
    if (b + c <= a) return false;
    return true;
  }

  let cnt = 0;
  const aux = (idx, dots) => {
    if (dots.length === 3) {
      cnt += canTriangle(dots) ? 1 : 0;
      return;
    }
    for (let i = idx + 1; i < A.length; i++) {
      aux(i, [...dots, A[i]]);
    }
  }
  aux(-1, []);
  return cnt;
}

//제출2: 제출 1 + sort => 시간초과
function solution(A) {
  const canTriangle = (dots) => {
    const [a, b, c] = dots;
    if (a + b <= c) return false;
    if (a + c <= b) return false;
    if (b + c <= a) return false;
    return true;
  }

  A.sort((a, b) => a - b);

  let cnt = 0;
  const aux = (idx, dots) => {
    if (dots.length === 3) {
      cnt += 1;
      return;
    }
    for (let i = idx + 1; i < A.length; i++) {
      const newDots = [...dots, A[i]];
      if (newDots.length === 3 && !canTriangle(newDots)) return;
      aux(i, [...dots, A[i]]);
    }
  }
  aux(-1, []);
  return cnt;
}

// 제출3: caterpillar 알고리즘 나름 따라해 봤는데 1개 더 통과되고 나머지 시간 초과
function solution(A) {
  const canTriangle = (dots) => {
    const [a, b, c] = dots;
    return a + b > c ? true : false;
  }

  A.sort((a, b) => a - b);

  let cnt = 0;
  for (let i = 0; i < A.length - 2; i++) {
    let leftEnd = i + 1;
    let rightEnd = i + 2;

    while (leftEnd < A.length - 1) {
      if (rightEnd < A.length && canTriangle([A[i], A[leftEnd], A[rightEnd]])) {
        rightEnd++;
        cnt++;
      }
      else {
        leftEnd++;
        rightEnd = leftEnd + 1;
      }
    }
  }
  return cnt;
}

// 최종: 위 코드랑 크게 다를 바가 없어보이지만 100%
//       연구가 필요함..
function solution(A) {

  A.sort((a, b) => a - b);

  let cnt = 0;
  for (let i = 0; i < A.length - 2; i++) {
    let leftEnd = i + 1;
    let rightEnd = i + 2;

    while (leftEnd < A.length - 1) {
      if (rightEnd < A.length && A[i] + A[leftEnd] > A[rightEnd]) {
        rightEnd++;
      }
      else {
        cnt += (rightEnd - leftEnd - 1);
        leftEnd++;
        // 여기서 rightEnd = leftEnd + 1 해버리면 시간초과 됨
      }
    }
  }
  return cnt;
}
