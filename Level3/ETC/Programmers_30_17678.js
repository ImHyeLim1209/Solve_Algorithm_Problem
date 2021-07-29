// https://programmers.co.kr/learn/courses/30/lessons/17678
// 제출답안: 코드가 좀 조잡함
// 9:00부터 n회 t분 간격으로 역에 도착하며, 최대 m명의 승객
// 셔틀을 타고 사무실로 갈 수 있는 도착시간 중 가장 늦은 시간?
// timetable: 크루가 대기열에 도착하는 시간
function solution(n, t, m, timetable) {
  const getTimeStamp = (timeStr) => {
    const [hour, min] = timeStr.split(":").map((v) => Number(v));
    return hour * 60 + min;
  }

  const getTime = (timeStamp) => {
    const hour = parseInt(timeStamp / 60).toString().padStart(2, "0");
    const min = (timeStamp % 60).toString().padStart(2, "0");
    return `${hour}:${min}`;
  }

  const startTime = getTimeStamp("09:00");
  const crewTimes = timetable.map((v) => getTimeStamp(v)).sort((a, b) => a - b);

  let cIdx = 0;
  for (let range = 0; range < n-1; range++) { // 마지막 직전 차까지 탄 사람들 계산
    const time = startTime + (range * t);

    let pIdx = 0;
    while (pIdx < m && cIdx < crewTimes.length) {
      if (time >= crewTimes[cIdx]) {
        cIdx++;
        pIdx++;
      } else {
        break;
      }
    }
  }

  // 마지막 차에 탈 사람들 계산
  // 마지막 사람보다 1분 빨리 기다리거나 혹은 셔틀이 오는 시간에 대기(pIdx)
  const lastTime = startTime + (n - 1) * t;

  let pIdx = 0;
  while (pIdx < m && cIdx < crewTimes.length) {
    if (lastTime >= crewTimes[cIdx]) { cIdx++; pIdx++; }
    else break;
  }

  let result = getTimeStamp("09:00");
  if (pIdx < m) result = lastTime;
  else result = crewTimes[cIdx-1] -1;
  return getTime(result);
}

// 비슷한 답안인데 정리됨
function solution(n, t, m, timetable) {
    const getTime = time => time.substr(0, 2) * 60 + +time.substr(3);

    let answer = getTime('09:00'),
        last = (n - 1) * t + answer,
        crews = timetable.map(getTime).sort((a, b) => a - b).filter(v => v <= last);

    for (let i = 0; i < n; i++) {
        let crewsNum = crews.filter(crew => answer >= crew).length;

        if (i === n - 1) {
            if (crewsNum >= m) answer = crews[m - 1] - 1;
        } else {
            crews.splice(0, crewsNum > m ? m : crewsNum);

            answer += t;
        }
    }

    return String(Math.floor(answer / 60)).padStart(2, '0') + ':' + String(answer % 60).padStart(2, '0');
}

