//https://www.acmicpc.net/problem/2805
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [_, M] = input[0].split(' ');
const arr = input[1].split(' ').map(Number);

function solution (M, trees) {
  const getMax = (arr) => {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) max = arr[i];
    }
    return max;
  };
  const getSlicedTrees = (height, trees) => {
    return trees.reduce((acc, cur) => {
      let rest = cur - height;
      rest = rest < 0 ? 0 : rest;
      return acc + rest;
    }, 0);
  };

  let min = 0;
  let max = getMax(trees);
  let result = 0;

  while (min <= max) {
    const mid = parseInt((min + max) / 2);
    const height = getSlicedTrees(mid, trees);
    if (height < M) {
      max = mid - 1;
    } else if (height > M) {
      if (mid > result) result = mid;
      min = mid + 1;
    } else {
      result = mid;
      break;
    }
  }
  return result;
};

console.log(solution(Number(M), arr));
