//배낭문제

//제출답안
const knapsack = function (weight, items, picks) {
  const aux = (idx, totalWeight, totalPrice) => {
    if (totalWeight > weight) return 0;
    if (idx >= items.length) { return totalPrice; }

    return Math.max(
      aux(idx + 1, totalWeight + items[idx][0], totalPrice + items[idx][1]),
      aux(idx + 1, totalWeight, totalPrice)
    )
  }
  return aux(0, 0, 0);
};

//개선
const knapsack = function (weight, items) {
  const LENGTH = items.length;
  function pickOrNot(idxToCheck, value, left) {
    if (idxToCheck === LENGTH) return value;

    const [wt, v] = items[idxToCheck];

    if (wt > left) return pickOrNot(idxToCheck + 1, value, left); //현재 아이템을 추가하면 최대 무게를 넘을 경우 포함시키지 않음

    return Math.max(
      pickOrNot(idxToCheck + 1, value + v, left - wt),
      pickOrNot(idxToCheck + 1, value, left)
    );
  }

  return pickOrNot(0, 0, weight); //최대 무게에서부터 빼 나가기
};

//레퍼런스
const knapsack = function (weight, items) {
  //cached[i]: 배낭의 합이 총 i kg 일 때 최대 가치
  const cached = Array(weight + 1).fill(0);
  items = items.filter((item) => item[0] <= weight);

  items.forEach(([wt, v]) => {
    const possible = Array(weight + 1).fill(0);
    for (let i = 1; i <= weight; i++) {
      possible[i] = cached[i]; //이전 아이템까지 고려했을 때 최대값
      if (i - wt >= 0 && cached[i - wt] + v > cached[i])
        possible[i] = cached[i - wt] + v;
      if (cached[i - 1] > cached[i]) possible[i] = cached[i - 1];
    }
    cached = possible;
  })
  return cached[weight];
};
