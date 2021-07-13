// 1-6 주사위를 굴려 칸을 이동한다.
// 칸들의 값을 합한다. => 최대가 되게한다.
// 0번 칸과 마지막 칸은 꼭 밟아야 한다.
// +인 값은 모두 밟고 가는 것이 좋음(주사위 횟수 제한은 없으니까)
// 10만이므로 제곱 안됨


//1. 누적 값 dp를 구한다.
//2. 누적 값을 구할 때 6칸 앞을 고려한다.
function solution(A) {
    const dp = [A[0], A[0] + A[1]];
    for(let i = 2; i<A.length; i++) {
        const candidates = [(dp[i-6] || A[0]), (dp[i-5]|| A[0]), (dp[i-4]|| A[0]), (dp[i-3]|| A[0]), dp[i-2], dp[i-1]];
        dp.push(Math.max(...candidates) + A[i]);
    }
    return dp[A.length -1];
}
