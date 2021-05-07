//외판원 문제
//여러 도시들의 위치가 주어졌을 때, 모든 도시들을 단 한번씩 방문하는 최단 거리(시작, 도착점이 정해지지 않음)

//제출답안: 모든 경우의 수 계산
function calculateDistance(p1, p2) {
  const yDiffSquared = Math.pow(p2[0] - p1[0], 2);
  const xDiffSquared = Math.pow(p2[1] - p1[1], 2);
  const dist = Math.sqrt(yDiffSquared + xDiffSquared);
  return Math.round(dist * 100);
}

const TSP = function (places) {
  const aux = (candidates, history, totalDistance) => {
    if (history.length === places.length) {
      return totalDistance;
    }

    let min = Number.MAX_SAFE_INTEGER;
    candidates.forEach((candidate, idx) => {
      const distance = history.length === 0 ? 0 : calculateDistance(history[history.length - 1], candidate);
      const result = aux(candidates.slice(0, idx).concat(candidates.slice(idx + 1, candidates.length)), [...history, candidate], totalDistance + distance);
      min = min < result ? min : result;
    });
    return min;
  }

  return aux(places, [], 0);
};

//리팩토링1 : 인덱스로 기록하기
const TSP = function (places) {
  const LENGTH = places.length;
  const isVisited = Array(LENGTH).fill(false);

  const aux = (history, totalDistance, lastIdx) => {
    if (history.length === places.length) {
      return totalDistance;
    }

    let min = Number.MAX_SAFE_INTEGER;
    places.forEach((place, idx) => {
      if (isVisited[idx]) return;
      isVisited[idx] = true;

      let distance = 0
      if (lastIdx !== null) {
        distance = calculateDistance(places[lastIdx], place);
      }
      const result = aux([...history, idx], totalDistance + distance, idx);
      min = min < result ? min : result;
      isVisited[idx] = false;
    });
    return min;
  }

  return aux([], 0, null);
};

//리팩토링2: 인덱스 + 메모이제이션
const TSP = function (places) {
  const memo = [...Array(places.length)].map(() => Array(places.length).fill(-1));
  const LENGTH = places.length;
  const isVisited = Array(LENGTH).fill(false);

  const aux = (history, totalDistance, lastIdx) => {
    if (history.length === places.length) {
      return totalDistance;
    }

    let min = Number.MAX_SAFE_INTEGER;
    places.forEach((place, idx) => {
      if (isVisited[idx]) return;
      isVisited[idx] = true;

      let distance = 0
      if (lastIdx !== null) {
        distance = memo[lastIdx][idx] !== -1 ? memo[lastIdx][idx] : calculateDistance(places[lastIdx], place);
        memo[lastIdx][idx] = distance;
        memo[idx][lastIdx] = distance;
      }
      const result = aux([...history, idx], totalDistance + distance, idx);
      min = min < result ? min : result;
      isVisited[idx] = false;
    });
    return min;
  }
  return aux([], 0, null);
};

//3. 레퍼런스: 처음 시작지점별로 구한다.
//처음 시작지점을 지정함으로서 재귀함수 내에서 처음 이동했을 때 totalDistance가 0인 if문을 제거할 수 있음
const TSP = function (places) {
  let currentMinDist = Number.MAX_VALUE;
  const LENGTH = places.length;
  function traverse(lastVisited, visited, totalDist, visitNum) {
    if (visitNum === LENGTH) {
      if (currentMinDist > totalDist) {
        currentMinDist = totalDist;
      }
      return;
    }

    visited.forEach((value, idx) => {
      if (value === false) {
        // 아직 방문하지 않은 도시와
        // 마지막으로 방문한 도시와의 거리를 구한다.
        const distToNext = calculateDistance(places[lastVisited], places[idx]);
        visited[idx] = true;
        traverse(idx, visited, totalDist + distToNext, visitNum + 1);
        visited[idx] = false;
      }
    });
  }

  // 각 도시의 현재 방문 여부를 관리하는 배열
  const visited = Array(LENGTH).fill(false);
  places.forEach((_, idx) => {
    // 각 도시에서 출발하는 경우를 구분한다.
    visited[idx] = true;
    traverse(idx, visited, 0, 1);
    visited[idx] = false;
  });

  return currentMinDist;
};
