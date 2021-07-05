// 시간초과
// A: 매일 주식의 가격을 담은 배열
// P일에 사서 Q일에 팔았다면 이익/손실은 |A[Q] - A[P]| 이다.
// 가장 최고의 이익을 리턴하세요.
// 이익을 낼 수 없다면 0을 리턴하세요.

// 이익의 내림차순으로 정렬한 배열 Sellprices(value = index)
// A를 돌면서 Sellprices의 인덱스보다 작다면 바로 이익 계산
function solution(A) {
    const profits = [0];
    const sellPrices = [...A].map((v, i) => [v, i]).sort((a, b) => A[b[1]] - A[a[1]]);

    for(let buyDay = 0; buyDay<A.length; buyDay++) {
        let sellIdx = 0;
        const buyPrice = A[buyDay];
        while(sellIdx < A.length) {
            const [sellPrice, sellDay] = sellPrices[sellIdx];
            if(buyPrice >= sellPrice) break;
            else if(buyDay > sellDay) sellIdx++;
            else if(buyPrice < sellPrice) {
                profits.push(sellPrice - buyPrice);
                break;
            } 
        }
    }
    return Math.max(...profits);
}


// 방법2) i 시점에서 판다고 생각하고 i까지의 min 값을 기억하고 있다가 팔자.
function solution(A) {
  const profits = [0];
  let min = A[0];

  for (let i = 0; i < A.length; i++) {
    const cost = A[i] - min;
    if (cost > 0) profits.push(cost);
    if (min > A[i]) min = A[i];
  }
  return Math.max(...profits);
}

// 이런 류의 문제는 for문을 판다고 생각하고 돌 것인지 산다고 생각하고 돌 것인지를 정하면 문제가 쉽게 풀릴 수도 있다...
