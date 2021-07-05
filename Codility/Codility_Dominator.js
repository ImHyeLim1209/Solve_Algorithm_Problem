// A배열의 지배자는 A의 요소들의 반 이상 나타나는 요소이다. 
// 카운팅해서 반 이상인거 들고오기
// 반 이상인 요소가 2개 일 수는 없다.
function solution(A) {
    const hash = A.reduce((acc, cur) => {
        acc[cur] = acc[cur]? acc[cur] + 1 : 1;
        return acc;
    }, {});

    let dominator = -1;
    for(const key in hash) {
        if(hash[key] >= Math.ceil((A.length + 1) / 2)) {
            dominator = Number(key);
            break;
        }
    }

    if(dominator === -1) return -1;

    const result = [];
    for(let i = 0; i<A.length; i++) {
        if(A[i] === dominator) return i;
    }
    return -1;
}

// hash 만들면서 반 이상인 요소가 있으면 바로 리턴
function solution(A) {
  const counter = {};
  const standard = A.length / 2;
  for (var i = 0; i < A.length; i++) {
    if (counter[A[i]]) {
      counter[A[i]].push(i);
    } else {
      counter[A[i]] = [i];
    }
    if (counter[A[i]].length > standard) {
      return counter[A[i]][0];
    }
  }
  return -1;
