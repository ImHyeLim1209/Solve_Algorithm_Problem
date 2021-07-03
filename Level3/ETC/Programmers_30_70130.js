// https://programmers.co.kr/learn/courses/30/lessons/70130
// 부분수열 = 원래 배열의 0개 이상의 원소들을 제거한 배열
// 스타수열 조건
// 1) 길이가 2이상의 짝수
// 2) 요소들을 2개씩 묶어 집합을 만들었을 때 이들의 교집합 원소가 1개 이상
// 3) i번째 요소와 i+1번째 요소는 달라야 한다.
// a의 모든 부분수열중에서 가장 긴 스타 수열의 길이는?(a의 길이 5만)

// 제출답안) 
// 1. a에서 숫자의 등장 횟수를 카운팅한다.
// 2. 등장 횟수가 제일 많은 숫자를 교집합의 원소라 치고 스타수열을 만들어간다.
// 3. 스타수열을 만들면서 2n과 2n+1의 숫자가 같지 않도록 유의한다.
// 4. 스타수열을 만드는데 실패하였을 경우 두 번째로 많은 숫자를 이용하여 만든다.
// 5. 스타수열 만들기에 성공했다면 바로 리턴하고, 모든 반복을 한 뒤에는 0을 리턴한다.

// 바로 리턴하는 경우 -> 예외가 존재한다.
function solution(a) {
  if (a.length === 1) return 0;

  const hash = a.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});
  const keys = Object.keys(hash).sort((a, b) => hash[b] - hash[a]).map(Number);

  let max = 0;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const starArr = [];
    let j = 0;
    while (j < a.length - 1) {
      if ((a[j] === key || a[j + 1] === key) && (a[j] !== a[j + 1])) {
        starArr.push(a[j]);
        starArr.push(a[j + 1]);
        j += 2;
      } else {
        j++;
      }
    }
    return starArr.length;
  }
  return 2;
}

// 모든 경우를 최대한 찾는 경우(hash) -> 시간초과
// 1) 출현 횟수별로 정렬을 한 후 해당 숫자를 교집합으로 하는 스타수열 만들어가기
// 2) 스타 수열은 출현횟수*2가 최대인 조건을 이요하여 중간에 break
function solution(a) {
  if (a.length === 1) return 0;

  const hash = a.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});
  const keys = Object.keys(hash)
  .sort((a, b) => hash[b] - hash[a]).map(Number);

  let max = 1;

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    let cnt = 0;
    let j = 0;
    if (hash[key].length <= max) return max * 2;
    while (j < a.length - 1) {
      if ((a[j] === key || a[j + 1] === key) && (a[j] !== a[j + 1])) {
        cnt++;
        j += 2;
      } else {
        j++;
      }
    }
    if (max < cnt) max = cnt;
  }
  return max * 2;
}

// hash를 배열로 바꿈 -> 통과O
function solution (a) {
  let answer = 0;
  const counts = a.reduce((acc, cur) => {
    acc[cur] ? acc[cur][1]++ : acc[cur] = [cur, 1];
    return acc;
  }, []).filter(el => el).sort((a, b) => b[1]-a[1]);
  
  for(let i = 0; i < counts.length; i++) {
    if(answer >= counts[i][1]) continue;
    
    let count = 0;
    
    for(let j = 0; j < a.length; j++) {
      if(a[j+1] === undefined) continue;
      if(a[j] === a[j+1]) continue;
      if(a[j] !== counts[i][0] && a[j+1] !== counts[i][0]) continue;
      
      count++;
      j++;
    }
    
    answer = Math.max(answer, count);
  }
  
  return answer * 2;
}

// 배운 점: hash를 써서 key만 for문으로 순회하는 것보다 배열로 만든 후에 모든 요소를 돌되 없는 것은 continue로 넘기는게 훨씬 빠른 것 같다

