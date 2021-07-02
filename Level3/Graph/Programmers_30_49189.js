// https://programmers.co.kr/learn/courses/30/lessons/49189
// 다익스트라로 최단거리를 구한 후 그 중 가장 긴 거리를 가진 요소들만 추출

// 답안1. 2중배열 Matrix -> 노드 최대 2만개 이므로 2만^2는 메모리 초과
function solution1(n, edge) {
  const INF = 50001;
  const createMatrix = (n, edges, INF) => {
    const matrix = [...Array(n + 1)].map(() => Array(n + 1).fill(INF));
    for (const edge of edges) {
      const [row, col] = edge;
      matrix[row][col] = 1;
      matrix[col][row] = 1;
    }

    for (let i = 0; i < n + 1; i++) {
      matrix[i][i] = INF;
    }
    return matrix;
  }

  const matrix = createMatrix(n, edge, INF);
  const path = matrix[1];
  const isUsed = Array(n + 1).fill(false);
  isUsed[0] = true;
  isUsed[1] = true;

  const getMinNode = (isUsed, path, INF) => {
    let node = -1
    let min = INF;
    for (let i = 2; i < n + 1; i++) {
      if (!isUsed[i] && path[i] < min) {
        node = i;
        min = path[i];
      }
    }
    return node;
  }

  let mid = getMinNode(isUsed, path, INF);
  while (mid !== -1) {
    isUsed[mid] = true;
    for (let i = 2; i < n + 1; i++) {
      if (mid === i) continue;
      const newDistance = path[mid] + matrix[mid][i];
      if (path[i] > newDistance) {
        path[i] = newDistance;
      }
    }
    mid = getMinNode(isUsed, path, INF);
  }

  const getMaxValue = (arr, INF) => {
    let max = -1;
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] !== INF && max < arr[i]) {
        max = arr[i]
      }
    }
    return max;
  }

  const max = getMaxValue(path, INF);
  return path.filter((v) => v === max).length;
}

// 답안2. Matrix를 연결리스트로 변경
// 연결리스트 탐색에 O(V)가 걸리므로 시간은 더 오래걸리나, 메모리는 효율적
function solution(n, edge) {
  const INF = 50001;
  const createLinkedList = (n, edges) => {
    const linkedList = {};
    for (let i = 0; i < n + 1; i++) {
      linkedList[i] = [];
    }

    for (const edge of edges) {
      const [row, col] = edge;
      linkedList[row].push(col);
      linkedList[col].push(row);
    }
    return linkedList;
  }

  const getLinkedListValue = (linkedList, property, value, INF) => {
    return linkedList[property].includes(value) ? 1 : INF;
  }

  const createPath = (linkedList, INF) => {
    const path = Array(n + 1).fill(INF);
    const list = linkedList[1];
    for (let i = 0; i < list.length; i++) {
      path[list[i]] = 1;
    }
    return path;
  }

  const matrix = createLinkedList(n, edge, INF);
  const path = createPath(matrix, INF);
  const isUsed = Array(n + 1).fill(false);
  isUsed[0] = true;
  isUsed[1] = true;

  const getMinNode = (isUsed, path, INF) => {
    let node = -1
    let min = INF;
    for (let i = 0; i < path.length; i++) {
      if (!isUsed[i] && path[i] < min) {
        node = i;
        min = path[i];
      }
    }
    return node;
  }

  let mid = getMinNode(isUsed, path, INF);
  while (mid !== -1) {
    isUsed[mid] = true;
    for (let i = 2; i < n + 1; i++) {
      if (mid === i) continue;
      const newDistance = path[mid] + getLinkedListValue(matrix, mid, i, INF);
      if (path[i] > newDistance) {
        path[i] = newDistance;
      }
    }
    mid = getMinNode(isUsed, path, INF);
  }

  const getMaxValue = (arr, INF) => {
    let max = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== INF && max < arr[i]) {
        max = arr[i]
      }
    }
    return max;
  }

  const max = getMaxValue(path, INF);
  return path.filter((v) => v === max).length;
}
