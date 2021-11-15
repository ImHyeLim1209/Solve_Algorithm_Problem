// https://programmers.co.kr/learn/courses/30/lessons/42861
// 제출답안
function solution(n, costs) {
  const roots = [...Array(n)].map((_, i) => i);
  const paths = [...costs].sort((a, b) => a[2] - b[2]);
  
  const find = (n) => {
    if (roots[n] === n) return n; 
    else return roots[n] = find(roots[n]); 
  }

  const changeRoot = (target, root) => {
    for (let i = 0; i < roots.length; i++) {
      if (roots[i] === target) roots[i] = root;
    }
  }

  const union = (x, y) => {
    let rootX = find(x);
    let rootY = find(y);

    if (rootX === rootY) return false;
    const root = Math.min(rootX, rootY);
    const target = Math.max(rootX, rootY);
    roots[target] = root;
    changeRoot(target, root);
  }

  const isCycle = () => {
    const value = roots[0];
    for (let i = 1; i < roots.length; i++) {
      if (value !== roots[i]) return false;
    }
    return true;
  }

  let idx = 0;
  let totalCost = 0;
  while (!isCycle() && idx < paths.length) {
    const [start, end, cost] = paths[idx];
    if (roots[start] !== roots[end]) {
      union(start, end);
      totalCost += cost
    }
    idx++;
  }

  return totalCost;
}

// 제출답안2 : isCycle이 없다.
function solution(n, costs) {
  const roots = [...Array(n)].map((_, i) => i);
  const paths = [...costs].sort((a, b) => a[2] - b[2]);

  const find = (n) => {
    if (roots[n] === n) return n;
    return find(roots[n]);
  }

  const changeRoot = (target, rValue) => {
    for (let i = 0; i < roots.length; i++) {
      if (roots[i] === target) roots[i] = rValue;
    }
  }

  const union = (a, b) => {
    const rootA = find(a);
    const rootB = find(b);

    if (rootA === rootB) return false;

    const root = Math.min(rootA, rootB);
    const target = Math.max(rootA, rootB);
    roots[target] = root;
    changeRoot(target, root);
    return true;
  }

  let result = 0;
  for (const path of paths) {
    const [start, end, cost] = path;
    const isSameRoot = union(start, end);

    if (!isSameRoot) continue;
    result += cost;
  }
  return result;
}

// 모범답안
function solution(N, costs) {
    const q = [];
    const root = [];
    for(let i = 0; i < N; i++) root[i] = i;
    costs.map(v => {
        q.push({from:v[0], to:v[1], cost:v[2]});
    })
    q.sort((a, b) => b.cost - a.cost);
    let n = 0;
    let ans = 0;
    while(n !== N - 1) {
        const curr = q.pop();
        if(find(curr.from) !== find(curr.to)) {
            n++;
            merge(curr.from, curr.to);
            ans += curr.cost
        }
    }

    function find(n) {
        if(root[n] === n) return n;
        return root[n] = find(root[n]);
    }
    function merge(_a, _b) {
        const a = find(_a);
        const b = find(_b);
        root[a] = b;
    }

    return ans;
}


// 문제를 위해 필요한 Union-Find 자료구조 기본 구현방법
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
