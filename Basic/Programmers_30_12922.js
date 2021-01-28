//https://programmers.co.kr/learn/courses/30/lessons/12922?language=javascript
/////////////////
//1. ['수', '박'] array를 만들고 %2연산으로 홀수면 수, 짝수면 박을 계속 더해나간다.
function solution(n) {
    var answer = '';
    const arr = ['수', '박'];
    for(let i = 0; i<n; i++) {
        answer += arr[i%2];
    }
    return answer;
}

/////////////////
//2. 수박을 반복시키고 홀수라면 수를 더한다. n이 1이라면 n/2가 0이므로 수박이 0번 반복된 후 수가 더해진다.
const waterMelon = n => {
    return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
}
