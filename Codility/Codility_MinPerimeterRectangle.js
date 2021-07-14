// 1. 가능한 모든 후보를 구한다: N의 약수들의 짝
// 2. 더했을 때 최소를 구한다.
function solution(N) {
    const getCandidates = (N) => {
        const result = [];
        for(let i = 1; i<=Math.sqrt(N); i++) {
            if(N % i === 0) result.push([i, N / i]);
        }
        return result;
    }

    return Math.min(...getCandidates(N).map((v) => (v[0] + v[1]) * 2));
}
