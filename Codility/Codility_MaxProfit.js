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
