//https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript
//////////////////////////////////
//1. 패턴을 이중배열에 넣어 reduce로 점수의 배열로 변환([5, 0, 0]) -> 점수의 최댓값을 가진 학생 숫자(인덱스) 가져오기
//학생이 추가될 가능성이나 계산법이 수정될 가능성 있다면 이 쪽이 더 낫지 않을까 생각
function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
  ]

  const resultArr = patterns.reduce((scores, pattern, i) => {
    scores[i] = answers.reduce((score, answer, j) => (
      answer === pattern[j % (pattern.length)]? score += 1 : score
      ), 0)
    return scores
  }, [0, 0, 0]);

  const maxScore = Math.max(...resultArr);
  return resultArr.reduce( (acc, cur, idx) => {
    if(cur === maxScore)  acc.push(idx + 1);
    return acc;
  }, [])
}

//////////////////////////////////
//2. 배열을 따로 만들어서 각자 계산 + filter를 이용하여 맞은 갯수 계산하기
//보기에는 이게 더 간단하고 이해하기 쉽다.
function solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};

    return answer;
}
