//https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

// 완전탐색으로 다 찾아보면 안될까? -> O 범위가 100까지라서..
function jumpingOnClouds(c) {
  let results = [];
  const aux = (idx, steps) => {
    if (c[idx] === 1) return;

    if (idx === c.length - 1) {
      results.push(steps);
      return;
    }

    
    aux(idx + 1, steps + 1);
    aux(idx + 2, steps + 1);
  }
  aux(0, 0);
  return Math.min(...results);
}

console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0]));

// 할일: 비슷한 문제를 DP로 풀었던 것 같은데 확인해보고 풀 수 있으면 추가하기
