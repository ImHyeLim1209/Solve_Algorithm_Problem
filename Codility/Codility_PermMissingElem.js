//https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
// 모든 숫자의 합(answer)을 구한다.
// A를 돌면서 sum에서 해당 요소를 빼고 남은 값이 정답이다.

function solution(A) {
    const N = A.length + 1;
    let answer = (N * (N + 1)) / 2;

    for(let i= 0; i < A.length; i++) {
        answer -= A[i];
    }
    return answer;
}
