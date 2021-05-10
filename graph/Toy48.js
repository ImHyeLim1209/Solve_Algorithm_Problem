//방향성 그래프의 임의의 두 정점(vertex)간 모든 최단 거리를 리턴(플로이드-와샬 알고리즘)

//제출답안
function createGraphByMatrix(num, edges) {
  const matrix = [];
  const INF = 101;
  for (let i = 0; i <= num; i++) {
    matrix.push(Array(num + 1).fill(INF));
    matrix[i][i] = 0;
  }
  edges.forEach(([src, dst, weight]) => {
    matrix[src][dst] = weight;
  });
  return matrix;
}

function FloydWarshall(num, edges) {
  let matrix = createGraphByMatrix(num, edges);

  for (let mid = 1; mid < num + 1; mid++) { //mid: 거쳐가야할 노드(mid가 가장 위에서 기준이 되어야 한다!)
    for (let start = 1; start < num + 1; start++) { //start: 출발점 노드
      for (let end = 1; end < num + 1; end++) { //end: 도착점 노드
        const newDistance = matrix[start][mid] + matrix[mid][end];
        if (matrix[start][end] > newDistance) {
          matrix[start][end] = newDistance;
        }
      }
    }
  }

  const INF = 101;
  return matrix
    .map((row) => {
      return row.map((col) => col === INF ? null : col);
    })
    .slice(1)
    .map((row) => row.slice(1));
}

//답안 예시
const num = 6;
const edges = [
  [1, 2, 2],
  [1, 3, 5],
  [1, 4, 1],
  [2, 1, 2],
  [2, 3, 2],
  [2, 4, 3],
  [2, 5, 1],
  [3, 5, 4],
  [3, 5, 1],
  [3, 6, 5],
  [4, 5, 1],
  [4, 5, 1],
  [4, 5, 1],
  [5, 6, 2],
  [5, 6, 2],
  [5, 6, 2],
  [5, 6, 2],
  [6, 1, 2],
  [6, 3, 4],
];
let output = FloydWarshall(num, edges);
console.log(output); // -->
/*
  [
  [0, 2, 4, 1, 2, 4],
  [2, 0, 2, 3, 1, 3],
  [5, 7, 0, 6, 1, 3],
  [5, 7, 7, 0, 1, 3],
  [4, 6, 6, 5, 0, 2],
  [2, 4, 4, 3, 4, 0],
  ]
*/

