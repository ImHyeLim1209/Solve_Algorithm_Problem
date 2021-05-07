//집합의 요소를 최대 한번씩만 더해서 만들어야 한다.
//`bound`를 넘지 않는 최대 수 리턴

//let output = subsetSum([1, 8, 3, 15], 10);
//console.log(output); // --> 9 (= 1 + 8)

//제출답안: O(N^2)
const subsetSum = function (set, bound) {
  const LENGTH = set.length;
  const sortedSet = set.sort((a, b) => a - b);
  const aux = (idx, left) => {
    if (idx === LENGTH) return bound - left;

    if (sortedSet[idx] > left) return bound - left;
    if (sortedSet[idx] === left) return bound;

    return Math.max(
      aux(idx + 1, left - sortedSet[idx]),
      aux(idx + 1, left)
    )
  }
  return aux(0, bound);
};

//레퍼런스: O(bound * N)
const subsetSum = function (set, bound) {
  let max = 0;
  const reachables = {}; //집합의 요소를 한 번이상씩 더해서 나올 수 있는 모든 경우의 수를 저장할 곳. key가 sum이고 value는 (true/false)? 이다.
  set.forEach((value) => {
    Object.keys(reachables).forEach((r) => {
      const reached = parseInt(r) + value;
      if (reached <= bound) {
        reachables[reached] = true;
        if (reached > max) max = reached;
      }
    });

    if (value <= bound) {
      reachables[value] = true;
      if (value > max) max = value;
    }
  });
  return max;
};
