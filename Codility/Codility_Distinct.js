// https://app.codility.com/programmers/lessons/6-sorting/distinct/
function solution(A) {
    const set = new Set();
    for(const num of A) {
        set.add(num);
    }
    return set.size;
}
