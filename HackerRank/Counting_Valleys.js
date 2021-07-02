// https://www.hackerrank.com/interview/interview-preparation-kit/warmup/challenges
// valley의 갯수를 세자. 처음 높이로 다시 돌아와야 valley라고 할 수 있다.
// U는 1, D는 -1로 해서 0으로 돌아오면 cnt++
// valley는 D로 시작해서 0으로 돌아와야 한다.

// 답안1. flag로 확인하기
// 1. hash로 U는 1, D는 -1
// 2. 현재 위치가 0이고 D가 들어왔다면 valley counting 준비.
// 3. valley counting이 끝나고 U이 들어왔다면 카운팅X
function countingValleys(steps, path) {
  const hash = { "U": 1, "D": -1 };
  const UP = "U";
  const DOWN = "D";
  let valleyCnt = 0;
  let pos = 0;
  let valleyFlag = false;

  for (let i = 0; i < steps; i++) {
    const step = path[i];
    if (pos === 0 && step === DOWN) {
      valleyFlag = true;
    }

    pos += hash[step];

    if (pos === 0 && valleyFlag) {
      valleyCnt++;
      valleyFlag = false;
    }
  }
  return valleyCnt;
}

// 답안2. positions 배열을 따로 만들어서 UP이면서 position이 0인 갯수 세기
// N만큼 오래 걸리긴 하는데 더 직관적
function countingValleys(steps, path) {
  const hash = { "U": 1, "D": -1 };
  const positions = [];

  let pos = 0;
  for (let i = 0; i < steps; i++) {
    const step = path[i];
    pos += hash[step];
    positions.push(pos);
  }

  let valleyCnt = 0;
  for (let i = 0; i < steps; i++) {
    if (positions[i] === 0 && path[i] === "U") valleyCnt++;
  }

  return valleyCnt;
}

console.log(countingValleys(12, "DDUUDDUDUUUD"));
