// https://programmers.co.kr/learn/courses/30/lessons/49191
// 순위를 매길 수 있는 선수의 수
// = 그래프가 다 이어져 있는 선수의 수

// 1. 순위가 다 정해진 선수를 구한다. => 그래프가 모두 이어져 있는 선수 계산 => hash
// 2. 중간 선수를 거쳐서 승패를 결정할 수 있는 노드가 있다면 업데이트
//    -해당 선수를 거쳐서 승점 계산
function solution (n, results) {
  const createGraph = () => {
    const hash = {};
    for (let i = 1; i <= n; i++) {
      hash[i] = {};
    };

    for (let i = 0; i < results.length; i++) {
      const [win, lose] = results[i];
      hash[win][lose] = true; // 이긴 경우
      hash[lose][win] = false; // 진 경우
    }
    return hash;
  };

  const graph = createGraph();
  for (let mid = 1; mid < n + 1; mid++) {
    for (let start = 1; start < n + 1; start++) {
      for (let end = 1; end < n + 1; end++) {
        if (start === end || (graph[start] && graph[start][end])) continue; // 승패가 있는 경우 => 계산 필요 없음
        if (!graph[start] || !graph[start][mid] || !graph[mid] || !graph[mid][end]) continue; // 중단점을 거쳐도 승패가 안 나는 경우
        if (graph[start][mid] === graph[mid][end]) {
          graph[end][start] = !graph[start][mid];
          graph[start][end] = graph[start][mid];
        }
      }
    }
  }

  let cnt = 0;
  for (const player in graph) {
    if (Object.keys(graph[player]).length === n - 1) cnt++;
  }

  return cnt;
}

// [승리, 패배]
console.log(solution(5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]])); // 2
