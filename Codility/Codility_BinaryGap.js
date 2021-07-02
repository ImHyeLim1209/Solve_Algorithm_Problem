// https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

// 이 것보다 사실 1기준으로 flag 세워서 cnt 세는게 훨씬 빠르긴 함

// 1. 2진수를 만든다(toString(0))
// 2. 1을 기준을 split하여 공백''을 제외한 부분들의 length 중 최댓값을 가져온다.
// 단, 10000 은 binary gap이 없다.
function solution(N) {
  const ranges = N.toString(2).split('1');
  if (ranges[ranges.length - 1] !== '') ranges.pop();

  return ranges.reduce((acc, cur) => {
    if (cur.length > acc) acc = cur.length;
    return acc;
  }, 0);
}
