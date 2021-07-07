// https://app.codility.com/programmers/lessons/15-caterpillar_method/
// 카운팅 문제
// 절대값을 기준으로 갯수세기
function solution(A) {
    const set = new Set(A.map((v) => Math.abs(v)));
    return set.size;
}
