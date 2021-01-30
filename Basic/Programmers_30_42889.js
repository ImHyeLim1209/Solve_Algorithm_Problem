//https://programmers.co.kr/learn/courses/30/lessons/42889?language=javascript
///////////////////////
//1. 스테이지 수 만큼 배열을 초기화  ex. stage가 5단계라면 [1,2,3,4,5]
//2. stage별로 실패율 계산 및 스테이지 저장하여 배열로 리턴  ex. 1단계 0.5%라면 [1, 0.5]
//3. 실패율로 정렬
//4. 정렬된 결과에서 스테이지만 뽑아서 
function solution(N, stages) {
    let resultArr = Array.from({length: N}, (v, i) => i+1);
    return resultArr
    .map((stage) => {
        let values = stages.reduce((acc, cur) => {
            if(cur >= stage) acc[1]++;
            if(cur === stage) acc[0]++;
            return acc;
        }, [0, 0]);
        return [stage, values[0]/values[1]];
    })
    .sort((a,b) => (b[1] - a[1]))
    .map((value) => (value[0]));
}
