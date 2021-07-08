// https://www.hackerrank.com/challenges/recursive-digit-sum/problem
// 풀이1. 런타임 오류
// 특정 범위를 넘어서면 number가 부동소수점(3.5466309473120514e+99) 으로 표시되므로 split("") 결과가 다른듯
function superDigit(n, k) {
  const aux = (k) => {
    if (k.length === 1) return k;

    const sum = k.split("").map(Number).reduce((acc, cur) => acc + cur).toString();
    return aux(sum);
  }

  const aux2 = (k, n) => {
    const result = k * n;
    if (result < 10) return result;
    return aux(result.toString());
  }

  const oneResult = aux(k.toString());
  return aux2(Number(oneResult), n);
}

console.log(superDigit(3, 148)); // 3
console.log(superDigit(4, 9875)); // 8
console.log(superDigit(3, 123)); // 9
console.log(superDigit(861568688536788, 100000)) // 3
