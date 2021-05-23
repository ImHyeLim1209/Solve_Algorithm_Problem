//https://programmers.co.kr/learn/courses/30/lessons/42860
//제출답안
function solution(name) {
  var verticalMove = 0;
  const asciiA = 65;

  //전체 위아래 이동 수 계산
  for (let i = 0; i < name.length; i++) {
    const diff = name[i].charCodeAt() - asciiA;
    verticalMove += diff > 13 ? 26 - diff : diff;
  }

  let horizontalMove = name.length - 1;
  for (let i = 1; i < name.length; i++) {
    if (name[i] === 'A') { //i부터 연속된 A구하기
      for (var j = i + 1; j < name.length; j++) {
        if (name[j] !== 'A') break;
      }
      const left = i - 1; //i~j범위 밖의 남은 왼쪽거리(index 0은 시작점이므로 제외시킴)
      const right = name.length - j; //i~j범위 밖의 남은 오른쪽 거리
      //left, right에 값이 있는 경우는 한 쪽으로 가다가 반대쪽으로 돌아가서 현재 자리 다음칸으로 왔을 때의 거리이다.
      horizontalMove = Math.min(horizontalMove, left > right ? left + right * 2 : left * 2 + right);
      i = j;
    }
  }
  return verticalMove + horizontalMove;
}

//다른풀이: https://blog.naver.com/teen14y/222109469253
