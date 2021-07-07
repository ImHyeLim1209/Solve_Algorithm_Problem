//
//풀이1. 두 수가 같은 소수 약수를 갖고 있다면 
//       두 수는 서로 나누어지는 수이고, 두 수를 서로 나누었을 때의 몫이 둘의 공통 약수에 포함된다.
//        69%
function solution(A, B) {
  let pair = 0;
  for (let i = 0; i < A.length; i++) {
    const max = Math.max(A[i], B[i]);
    const min = Math.min(A[i], B[i]);

    const quo = max / min;
    if (min !== 1 &&
      max % min === 0 &&
      (min % quo === 0 || quo % min === 0)) pair++;
    else if (min === 1 && max === 1) pair++;
  }
  return pair;
}

// 풀이2. 두 수의 최대공약수를 구한 후, 두 수에 각각 최대공약수와의 최대 공약수를 구해나가다가 1이 아닌 수가 나오면 해당 최대공약수로만 이루어진 숫자가 아닌 것.
// 10, 30 => 2*5, 2*3*5
function solution(A, B) {
    const Z = A.length;
    let cnt = 0;

    for(let i = 0; i < Z; i++) {
        if(hasSamePrimeDiv(A[i], B[i])) {
            cnt ++;
        }
    }

    return cnt;

    function getGCD(A, B) { //최대 공약수 구하기
        if(B === 0) return A;
        return getGCD(B, A % B);
    }

    function hasSamePrimeDiv(A, B) { //같은 인수를 가지고 있는지 확인

        let gcd = getGCD(A, B);
        let gcdA = 0;
        let gcdB = 0;;


        while(gcdA !== 1) {
            gcdA = getGCD(A, gcd);
            A = A / gcdA;
        }

        while(gcdB !== 1) {
            gcdB = getGCD(B, gcd);
            B = B / gcdB;
        }

        return (A === 1 && B === 1)? true : false; //만약 값이 1이 아니라면 그 값은 공통되지 않는 인수인 것이다.
        //또한 두 수 모두 공통된 인수를 가지고 있어야 하므로 조건식을 위와 같이 적어주었다.
    }
}
