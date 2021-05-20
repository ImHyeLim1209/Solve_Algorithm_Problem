//https://programmers.co.kr/learn/courses/30/lessons/12978
//제출답안: 다익스트라
function solution(N, road, K) {
  //그래프를 만든다.
  const getGraph = (N, road) => {
    const INF = 10001 * N; //다른 노드를 거쳐갈 수 도 있으므로 각 가중치의 최대값인 10001이 아니라 10001 * N으로 최대값을 잡는 것이 좋다.
    const graph = [...Array(N + 1)].map(() => Array(N + 1).fill(INF));
    road.forEach((path) => {
      const [start, end, time] = path;
      if (graph[start][end] < time) return;
      graph[start][end] = time;
      graph[end][start] = time;
    });
    return graph;
  };

  const graph = getGraph(N, road);
  
  //2. 1과 다른 노드와의 거리만 가져온다.
  const edges = graph[1].slice();
  const isVisited = Array(N + 1).fill(false);
  isVisited[0] = true;
  isVisited[1] = true;

  const getClosestNode = () => {
    let minIdx = 0;
    for (let i = 1; i < N + 1; i++) {
      if (!isVisited[i] && edges[minIdx] > edges[i]) minIdx = i;
    }
    return minIdx;
  }

  for (let i = 0; i < N - 1; i++) {
    //가장 가까운 노드를 가져온다.
    const node = getClosestNode();
    isVisited[node] = true;

    edges.forEach((edge, idx) => {
      //해당 노드를 거쳐가는 것이 더 가깝다면 값을 변경한다.
      const newPath = edges[node] + graph[node][idx];
      if (idx !== 1 && newPath < edge) edges[idx] = newPath;
    });
  }

  //K이하인 
  return edges.reduce((acc, cur) => cur <= K ? acc + 1 : acc, 1);
}
