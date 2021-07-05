// 
// 풀이 참고: https://cheolhojung.github.io/posts/algorithm/Codility-MinAvgTwoSlice.html
// a < b일 때 a <= (a+b)/2 <= b가 항상 성립한다.
// a < b < c < d 일 때 (a + b) <= (c + d)이므로, (a+b)/2 <= (a+b+c+d)/4 <= (c+d)/2가 항상 성립한다.
// 원소가 4개(a, b, c, d)인 그룹은 (a, b)와 (c, d)를 나누었을 때, 각각의 평균의 작은 값 이상이 된다.
// 즉, 크기가 4 이상인 부분집합의 평균 들은 크기가 2, 3인 부분집합의 평균보다 클수가 없다. 따라서 슬라이스 한 평균의 최소값은 반드시 크기가 2나 3인 슬라이스이다.
// 그러므로 크기가 2, 3인 슬라이스만 비교하면 된다.
// p.s. 예외로 원소가 3개인 그룹에서 2개인 그룹과 1개인 그룹의 경우를 확인해야 하지만, 문제에서 주어진 조건에 의하면 그룹의 원소는 최소 2개 이상이므로 2개와 3개인 그룹만 비교

function solution(A) {
    let min = (A[0] + A[1]) / 2;
    let minIdx = 0;

    for(let i = 2; i<A.length; i++) {
        const avg1 = (A[i-2] + A[i-1] + A[i]) / 3;
        if(avg1 < min) {
            min = avg1;
            minIdx = i-2;
        }

        const avg2 = (A[i-1] + A[i]) / 2;
        if(avg2 < min){
            min = avg2;
            minIdx = i-1;
        }
    }
    return minIdx;
}
