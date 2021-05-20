//https://programmers.co.kr/learn/courses/30/lessons/42885
//제출답안
function solution(people, limit) {
  let cnt = 0;
  let left = [...people].sort((a, b) => a - b); //순서대로 정렬 후 맨 앞의 것, 맨 뒤의 것을 더해서 limit 안 넘으면 같이 보트에 탑승한다.
  let start = 0;
  while (start < left.length) {
    cnt++;
    const person1 = left.pop();
    if (left[start] + person1 <= limit) start++; //원래 start대신 상수 0이고 left.slice(1)였는데 시간초과 되서 slice로 바꿈
  }
  return cnt;
}

//다른 답안(원리는 동일)
function solution(people, limit) {
    people.sort(function(a, b){return a-b});
    for(var i=0, j=people.length-1; i < j; j--) { //i는 start, j는 end에 대응됨
        if( people[i] + people[j] <= limit ) i++;
    }    
    return people.length-i; //var로 선언하면 for문 내에 있는 i를 가져올 수 있는건가?
}
