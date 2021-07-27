// https://programmers.co.kr/learn/courses/30/lessons/42861

// 문제를 위해 필요한 Union-Find 자료구조 => 두 노드가 연결되었는지 확인한다.
function solution(n, paths) {
  const roots = [...Array(n)].map((_, i) => i);

  const find = (n) => {
    if (roots[n] === n) return n; // root는 값이 자기 자신이다.
    else return find(roots[n]); // root를 찾아나간다. roots[n] = find(roots[n]); 으로 최적화 가능
  }

  const union = (x, y) => {
    let rootX = find(x);
    let rootY = find(y);

    if (rootX === rootY) return false;
    if (rootX < rootY) roots[rootY] = rootX; // 항상 작은 값을 루트로 설정
    else roots[rootX] = rootY;
  }

  // union-find 연산 시작
  for (const path of paths) {
    const [start, end] = path;
    union(start, end);
  }
  return roots;
}

console.log(solution(8, [[0, 1],[1, 2],[2, 3],[3, 4],[3, 5],[7, 6]]));
