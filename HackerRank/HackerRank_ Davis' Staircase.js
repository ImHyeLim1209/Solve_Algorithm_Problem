
// !계단을 한 번에 1, 2, 3 칸 오를 수 있다. n개의 계단이 있을 떄 계단을 오르는 경우의 수?
// 10000000007 나눈 수를 리턴
// n은 36까지 가능
// 1 + 1 + 1
// 1 + 2
// 2 + 1
// 3


//제출1: 단순 Recursion 시간초과
function stepPerms(n) {
  const aux = (n) => {
    if (n < 0) return 0;
    if (n === 0) return 1;

    return (aux(n - 1) + aux(n - 2) + aux(n - 3)) % 10000000007;
  }
  return aux(n);
}

//제출2: 개선1: memo(배열)
//       피보나치 수열과 같은 원리. 
// 예를 들어 aux(5)를 구한다면 aux(5) = aux(4) + aux(3) + aux(2)
//                           aux(4) = aux(3) + aux(2) + aux(1)
//  aux(4)를 만들기 위해 필요한 memo는 이미 구해져 있으므로 이들로 aux(4)를만들고 aux(4)도 메모에 저장한다.
  const memo = Array(n + 1).fill(0);
  memo[1] = 1;
  memo[2] = 2;
  memo[3] = 4;
  const aux = (now) => {
    // if (now > n) return 0;  //memo에 1, 2, 3이 있으므로 해당 경우 예외처리는 필요없다.
    // if (now === 0) return 1;
    if (memo[now] !== 0) return memo[now];

    const result = (aux(now - 1) + aux(now - 2) + aux(now - 3)) % 10000000007;
    memo[now] = result;

    return result;
  }
  return aux(n);

//제출3: 개선2: memo(객체) => 객체가 살짝 더 빠른듯(둘 다 memo[now] 갱신 안될 때 객체가 테스트 케이스 1개 더 통과 됨)
function stepPerms(n) {
  const memo = { 1: 1, 2: 2, 3: 4 }
  const aux = (now) => {
    if (memo[now]) return memo[now];

    const result = (aux(now - 1) + aux(now - 2) + aux(now - 3)) % 10000000007;
    memo[now] = result;

    return result;
  }
  return aux(n);
}
