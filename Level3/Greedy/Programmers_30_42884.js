// https://programmers.co.kr/learn/courses/30/lessons/42884
// 제출답안
// 1. 출발지, 도착지 별로 sort한다.
// 2. 비교하면서 도착지에 카메라를 설치한다.
function solution(routes) {
  const srcArr = [...routes.sort((a, b) => a[0] - b[0])]; // 이렇게 안하면 srcArr = dsrArr이 되어버린다.
  const dstArr = [...routes.sort((a, b) => a[1] - b[1])];

  let srcIdx = 0;
  let dstIdx = 0;
  let camera = [];

  while (dstIdx < routes.length && srcIdx < routes.length) {
    // 1. 카메라를 설치한다.
    const pos = dstArr[dstIdx][1];
    camera.push(pos);

    // 2. 설치된 카메라와 겹치는 경우를 센다.
    while (srcIdx < routes.length && srcArr[srcIdx][0] <= pos) {
      srcIdx++;
    }

    // 3. 다음 카메라가 설치될 장소를 찾는다.
    while (dstIdx < routes.length && dstArr[dstIdx][0] <= pos) {
      dstIdx++;
    }
  }
  return camera.length;
}
console.log(solution([[-20, 15], [-14, -5], [-18, -13], [-5, -3]]));
