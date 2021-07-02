// https://programmers.co.kr/learn/courses/30/lessons/17676
// 제출1. 
// 1. 작업의 시작-끝을 계산한 배열 ranges를 만든다. [startTime, endTime, spendTime]
//    -계산 편의 상 정수로 바꾼다. (hour * 3600 + min * 60 + sec) * 1000
// 2. 한 작업의 끝나는 시점을 시작으로 1초간이 후보군이다.
//    -후보 시간에 다른 겹치는 작업이 있는지 일일이 확인한다.(이중for문)
function solution(lines) {
  //편하게 정수로 계산
  const getTimeStamp = (time) => {
    const [hour, min, sec] = time.split(':').map(Number);
    return Math.floor((hour * 3600 + min * 60 + sec) * 1000);
  }

  //spendTime + 0.001 왜냐하면 초는 포함해서 세니까
  const getStartTime = (endTime, spendTime) => {
    return endTime - (spendTime) + 1;
  }

  //1초를 더한 값이 예상 범위
  const getRangeEndTime = (endTime) => {
    return endTime + 1000 - 1;
  }

  //timestamp: (h*3600 + m*60 + s) * 1000 (소수 제거)
  const convertRange = (endTime, spendTime) => {
    return [getStartTime(endTime, spendTime), endTime, spendTime];
  }

  // 1. 작업을 위한 timeStamp, range 변환 [startTime, endTime, spendTime]
  const ranges = [] // timeStamp로 변환된 배열
  for (const line of lines) {
    const [_, endTime, spendTime] = line.split(' ');
    const endTimeStamp = getTimeStamp(endTime);
    const spendTimeNumber = Number(spendTime.slice(0, -1)) * 1000;
    ranges.push(convertRange(endTimeStamp, spendTimeNumber));
  }

  let max = 1;
  let cnt = 0;

  //2. 최대 많이 처리된 구간을 구한다.
  // 많이 처리된 구간은 어떤 작업의 endTime에서 시작하여 1초간이다.
  // 모든 endTime ~ +1초 구간에 다른 작업이 있는지 확인한다.
  for (let i = 0; i < ranges.length; i++) {
    const endTime = ranges[i][1];
    const endRangeTime = getRangeEndTime(endTime);

    for (let j = 0; j < ranges.length; j++) {
      const targetStartTime = ranges[j][0];
      const targetEndTime = ranges[j][1];
      if ((endTime <= targetStartTime && targetStartTime <= endRangeTime) ||
        (endTime <= targetEndTime && targetEndTime <= endRangeTime) ||
        (targetStartTime <= endTime && endRangeTime <= targetEndTime)
      ) {
        cnt++;
      }
    }
    //if (ranges[i][2] === 1) cnt--;
    if (max < cnt) max = cnt;
    cnt = 0;
  }
  return max;
}


