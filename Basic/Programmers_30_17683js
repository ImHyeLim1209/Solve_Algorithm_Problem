//https://programmers.co.kr/learn/courses/30/lessons/17683
//제출답안1: 한가지 케이스 외에 모두 통과됨

//두 개의 배열을 비교할 때 예를 들어 cdcdf가 cdcdcdf안에 있는지 확인할 때 idx를 이용해서 다음과 같이 비교하면
//cdcdc 지점에서 idx가 0이 되므로 포함되지 않는다고 판단한다.
function solution(m, musicinfos) {
  let result = ["(None)", 0];
  const melody = m.match(/[A-G]#*/g);

  const getMinutes = (start, end) => {
    const ONEHOUR = 60;
    const [startH, startM] = start.split(':');
    const [endH, endM] = end.split(':');

    let min = endM - startM;
    let hour = endH - startH;
    if (min < 0) {
      min += ONEHOUR;
      hour -= 1;
    }
    return hour * ONEHOUR + min;
  }

  const repeatArr = (arr, n) => {
    let result = [];
    while (n > 0) {
      result = result.concat(arr);
      n--;
    }
    return result;
  }

  const getTotalSound = (music, totalMin) => {
    let sounds = music.match(/[A-G]#*/g);
    return repeatArr(sounds, parseInt(totalMin / sounds.length)).concat(sounds.slice(0, totalMin % sounds.length));
  }

  const isInnerArr = (arr1, arr2) => { //여기서 문제 발생!!
    let idx = 0;
    for (const el of arr1) {
      if (el === arr2[idx]) idx++;
      else {
        idx = 0;
      }
      if (idx === arr2.length) return true;
    }
    return false;
  }

  const compareMusic = (music1, music2) => {
    const [_, time1] = music1;
    const [__, time2] = music2;

    if (time2 > time1) return music2;
    return music1;
  }

  for (const musicinfo of musicinfos) {
    const [start, end, title, music] = musicinfo.split(',');
    const totalMin = getMinutes(start, end);
    const totalSound = getTotalSound(music, totalMin);
    if (isInnerArr(totalSound, melody)) result = compareMusic(result, [title, totalMin]);
  }
  return result[0];
}
