// https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/
// 3개의 숫자를 골라서 최대의 수를 만들자.
// 양수 3개 
// 음수 2개(절대값 최대) * 양수 1개

function solution(A) {
    const arr = [...A].sort((a, b) => a - b);
    let mul1 = arr[0] * arr[1] * arr[arr.length-1];
    let mul2 = arr[arr.length-1] * arr[arr.length-2] * arr[arr.length-3];

    return Math.max(mul1, mul2);
}
