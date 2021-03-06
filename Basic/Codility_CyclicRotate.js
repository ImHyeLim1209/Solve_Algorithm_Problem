// 1. 1회 rotate 하는 함수 rotate를 만든다.
//    단, 원본을 바꾸지 않는다.
// 2. rotate를 K번 부른다.
// 3. empty배열이 있을 수 있다.
function solution(A, K) {
    if(A.length === 0) return A;
    const rotate = (A) => {
        const result = [...A];
        let lastElement = A[A.length -1];

        for(let i = 1; i<result.length; i++) {
            result[i] = A[i-1];
        }
        result[0] = lastElement;
        return result;
    }

    let result = [...A];
    for(let i = 0; i<K; i++) {
        result = rotate(result);
    }
    return result;
}

// rotate 살짝 개선 버전
const rotate = (arr) => {
    const result = [arr[arr.length - 1]];
    for (let i = 0; i < arr.length - 1; i++) {
      result.push(arr[i]);
    }
    return result;
  }
