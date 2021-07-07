// https://www.hackerrank.com/challenges/find-the-nearest-clone/problem
// 한 색상에서 출발해서 똑같은 색상이 있는 다른 노드까지 가는 최단거리?
// 페어가 없거나 색이 없으면 -1 리턴
// graphNodes: 노드 갯수
// graphFrom: 출발지 노드
// graphTo: 도착지 노드
// ids: 노드들의 색상
// val: 색깔을 맞추어야 하는 색상의 id

// 노드 수가 10만이 가능하므로 배열 그래프 안됨 => LinkedList

//1. LinkedList로 지도를 만든다. -> 이걸로 만드는게 맞을까? 2차원 배열은 memory 초과가 날텐데, linkedList는 시간초과가 날 수도있어..
//2. bfs로 최단 경로를 찾는다.
//3. 모든 val 색상 노드에 대해 bfs 탐색을 한 후 최대값만 리턴
function findShortest(graphNodes, graphFrom, graphTo, ids, val) {
  const createGraph = (n, starts, ends) => {
    const graph = {};
    for (let i = 0; i < starts.length; i++) {
      const start = starts[i] - 1;
      const end = ends[i] - 1;
      if (!graph[start]) graph[start] = {};
      if (!graph[end]) graph[end] = {};

      graph[start][end] = true;
      graph[end][start] = true;
    }
    return graph;
  }

  const bfs = (graph, start, color, ids) => {
    const queue = {
      storage: [],
      front: 0,
      rear: 0,
      isEmpty: function () { return this.front === this.rear; },
      enqueue: function (value) {
        this.storage.push(value);
        this.rear++;
      },
      dequeue: function () { return this.storage[this.front++]; }
    }

    const isVisited = Array(ids.length).fill(false);
    isVisited[start] = true;

    queue.enqueue([start, 0]);
    while (!queue.isEmpty()) {
      const [src, step] = queue.dequeue();
      if (step !== 0 && ids[src] === color) return step;

      for (let i = 0; i < ids.length; i++) {
        if (graph[src] && graph[src][i] && !isVisited[i]) {
          isVisited[i] = true;
          queue.enqueue([i, step + 1]);
        }
      }
    }
    return 1000001;
  }

  let max = 1000001;
  const graph = createGraph(graphNodes, graphFrom, graphTo);
  for (let i = 0; i < graphNodes; i++) {
    if (ids[i] !== val) continue;
    const cnt = bfs(graph, i, val, ids);
    if (cnt < max) max = cnt;
  }
  return max === 1000001 ? -1 : max;
}

console.log(findShortest(5, [1, 1, 2, 3], [2, 3, 4, 5], [1, 2, 3, 3, 2], 2));
console.log(findShortest(4, [1, 1, 4], [2, 3, 2], [1, 2, 1, 1], 1));
