//https://programmers.co.kr/learn/courses/30/lessons/72411
//제출답안: 모든 경우의 수 구해서 필터링
function solution(orders, course) {
  let answer = [];
  const courseMax = Math.max(...course);

  //1. hash 만들기
  const hash = [...Array(courseMax + 1)].map((_) => { return {} });

  //3. orders의 각 order에서 경우의 수로 key만들고 갯수 넣기
  const createCoordination = (order, idx, left, max) => {
    if (left.length > max) return;

    const n = left.length;
    hash[n][left] = hash[n][left] ? hash[n][left] + 1 : 1;

    for (let i = idx + 1; i < order.length; i++) {
      createCoordination(order, i, [...left, order[i]].sort().join(''), max);
    }
  }

  for (const order of orders) {
    createCoordination(order, -1, '', Math.min(order.length, courseMax));
  }

  //4. course 수 별로 가장 큰 값인 거 찾아서 answer에 넣기
  for (const n of course) {
    const max = Math.max(Math.max(...Object.values(hash[n])), 2);
    const newMenus = Object.entries(hash[n]).filter(([key, cnt]) => cnt === max).map((value) => value[0]);
    answer = [...answer, ...newMenus];
  }
  return answer.sort();
}
