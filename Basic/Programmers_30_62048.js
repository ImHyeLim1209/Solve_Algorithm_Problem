//https://programmers.co.kr/learn/courses/30/lessons/62048
//너비, 높이가 w,h인 사각형의 경우 사각형이 잘리는 패턴이 w,h의 최대 공약수 만큼 반복된다.
//왜냐하면 (0,0), (w,h)를 지나는 지나는 직선은 y = h/w x 이므로 해당 직선에서 x,y 모두 정수에 있는 경우는 w,h의 최대공약수가 된다.
//이 때 해당 곡선에서 가장 작은 정수좌표는 (w/최대공약수, h/최대공약수)이다. 

//최대공약수가 1인 직사각형의 경우 정사각형은 w+h-1개가 제거된다.
//가로에서 w번 잘리고, 세로에서 h번 잘리는데 처음 (0,0)에서 출발하므로 한 칸이 겹치기 때문이다.

//따라서 답은 다음과 같다.
function solution(w, h) {
  const getGCD = (a, b) => {
    if (b === 0) return a;
    return getGCD(b, a % b);
  }

  const gcd = getGCD(w, h); //반복횟수
  const minW = parseInt(w / gcd);
  const minH = parseInt(h / gcd);

  return w * h - ((minW + minH - 1) * gcd); //사실 minW, minH 둘다 gcd를 분모로 하는 분수이므로 더 약분할 수 있다.
}
