// https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/
function solution(A, B, K) {
    const a = Math.floor((A - 1) / K);
    const b = Math.floor(B / K);
    return b - a;
}
