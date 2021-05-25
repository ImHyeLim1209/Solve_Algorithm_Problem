//https://programmers.co.kr/learn/courses/30/lessons/42895
//제출답안
function solution(N, number) {
  if (N === number) return 1;
  const matrix = [...Array(8 + 1)].map(() => new Set());

  const calculate = (n, set1, set2) => {
    for (const value1 of set1) {
      for (const value2 of set2) {
        matrix[n].add(value1 + value2);
        matrix[n].add(value1 - value2);
        matrix[n].add(value1 * value2);
        if (value2 !== 0) matrix[n].add((value1 / value2)); //(value1 / value2) - (value1 / value2) % 1, (value1 / value2)>>0 로 하면 결과는 같은데 조금 더 빠르다.
      }
    }
  }

  for (let i = 1; i <= 8; i++) {
    matrix[i].add(parseInt('1'.repeat(i) * N));
    for (let j = 1; j <= i; j++) {
      calculate(i, matrix[j], matrix[i - j])
    }
    if (matrix[i].has(number))
      return i;
  }
  return -1;
}
