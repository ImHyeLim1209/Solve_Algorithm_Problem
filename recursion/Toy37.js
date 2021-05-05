//다양한 동전들을 가지고 특정 금액을 만들 수 있는 모든 경우의 수를 리턴
//10, [1,5] -> [1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,5], [5,5] 3개

//제출코드: O(2^M * N)
const coinChange = function (total, coins) {
  const results = [];
  const aux = (goal, price, coins, use) => {
    if (price === total) {
      results.push(use);
      return;
    }

    coins.forEach((coin) => {
      if (use[use.length - 1] > coin || price + coin > total) return;
      aux(goal, price + coin, coins, use.concat(coin))
    });
  }

  aux(total, 0, coins, [0]);
  return results.length;
};

//리팩토링(reference): 모든 경우의 수를 저장하지 않고 처음부터 갯수를 구한다. 방금 사용한 코인 부터 다음 코인을 센다(foreach+use -> for)
const coinChange = function (total, coins) {
  const makeChageFrom = (left, idx) => { //total부터 사용한코인을 제거하여 0에 도달하도록 한다.
    if (left === 0) return 1; //끝까지 도달하면 경우의 수 +1

    let cnt = 0;
    // 지금 사용하고 있는 동전부터만 고려한다.
    for (let i = idx; i < coins.length; i++) {
      if (left - coins[i] >= 0) {
        cnt = cnt + makeChageFrom(left - coins[i], i);
      }
    }

    return cnt;
  };
  // 0번째 동전부터 사용한다.
  return makeChageFrom(total, 0);
};

//리팩토링2: memoization
const coinChange = function (total, coins) {
  const memo = [];
  // i만큼의 금액을 coins[j]부터 ~ coins[coins.length - 1]까지 사용하여 만들 수 있는 경우의 수
  for (let i = 0; i < total + 1; i++) memo.push(Array(coins.length).fill(0));

  const aux = (left, idx) => {

    if (idx >= coins.length && left > 0) return 0;
    if (left === 0 || left < 0) {
      return 1;
    }
    if (memo[left][idx] !== 0) {
      return memo[left][idx];
    }

    for (let i = idx; i < coins.length; i++) {
      if (left === total && i !== 0) { //total 목표치의 경우 idx가 변하지 않으므로 강제로 따로 넣어주어야함(없어도 정답인 3에는 지장 없음)
        memo[left][i] += aux(left - coins[i], i);
      }
      if (left - coins[i] >= 0) {
        memo[left][idx] += aux(left - coins[i], i);
      }
    }
    return memo[left][idx];
  }

  return aux(total, 0);
};

//방법2: 현재 코인제외하고 진행 + 현재 코인을 포함하고 진행 
const coinChange = function (total, coins) {
  const aux = (left, idx) => {
    if (left === 0) return 1;
    if (left < 0) return 0;
    if (idx >= coins.length && left > 0) return 0;

    return aux(left, idx + 1) + aux(left - coins[idx], idx);
  }
  return aux(total, 0);
};

//방법2 리팩토링: memoization reference
const coinChange = function (total, coins) {
  const memo = [];
  for (let i = 0; i < total + 1; i++) memo.push(Array(coins.length).fill(-1));
  const makeChageFrom = (left, idx) => {
    if (left === 0) return 1;
    if (left < 0) return 0;
    if (idx >= coins.length && left > 0) return 0;
    if (memo[left][idx] !== -1) return memo[left][idx];

    // left만큼의 금액을 coins[idx]부터 사용하여 만들 수 있는 경우의 수는
    //  1) coins[idx]는 그만 사용하고, 다음 동전으로 넘어가거나 (목표 금액은 그대로이고, idx가 증가한다.)
    //  2)) coins[idx]를 한번 더 사용한다. coins[idx]를 또 사용할 수 있으므로, idx는 그대로이고, 목표 금액은 coins[i]만큼 줄어든다.
    memo[left][idx] =
      makeChageFrom(left, idx + 1) + makeChageFrom(left - coins[idx], idx);
    return memo[left][idx];
  };

  return makeChageFrom(total, 0);
};




