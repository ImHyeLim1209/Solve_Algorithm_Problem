// https://app.codility.com/programmers/lessons/6-sorting/triangle/
// 삼각형을 만들 수 있는 숫자가 있으면 1 없으면 0
// 최대한 비슷한 숫자가 3개 있어야 함 -> sort해서 처음부터 3개씩

function solution(A) {
    const sortedArr = A.sort((a, b) => a-b);
    const canTriangle = (a, b, c) => {
        if(a + b <= c) return false;
        else if(a + c <= b) return false;
        else if(b + c <= a) return false;
        return true;
    }

    for(let i = 0; i<sortedArr.length - 2; i++) {
        if(canTriangle(sortedArr[i], sortedArr[i+1], sortedArr[i+2])) return 1;
    }
    return 0;
}
