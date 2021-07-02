//https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/
// 위치 X -> Y로 가는데 항상 D만큼 씩 이동 가능
// 최소 점프 횟수 구하기

// X + (D * ?) >= Y
// (D * ?) >= Y - X
// ? >= (Y - X) / D
function solution(X, Y, D) {
    return Math.ceil((Y- X) / D);
}
