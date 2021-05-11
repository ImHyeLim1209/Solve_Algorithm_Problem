//https://programmers.co.kr/learn/courses/30/lessons/12941

//제출답안
function solution(A, B) {
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);

  return sortedA.reduce((acc, cur, idx) => { return acc + cur * sortedB[idx] }, 0);
}

//증명?
//A = {a, b, c}, B = {d, e, f} 이고 a<c, d<f라 하자. A와 B의 최대-대값 끼리 곱하거나 최대-최소 값끼리 곱해나가는 2가지 방법을 비교해보자.
//최대-최소값끼리 곱: af + be + cd
//최대-최대값끼리 곱: ad + be + cf

//최대-최소값 < 최대-최대끼리 곱이라 가정해보자
//af + be + cd < ad + be + cf
//af + cd < ad +  cf //(be 공통이므로 제거)
//a(f - d) < c(f - d) //(이항)
//a > c //(f-d < 0 이므로 부등호 방향이 반전된다.)
//a > c는 처음 가정인 a<c와 반대되므로 이는 틀렸다. 즉, 최대-최소값 > 최대-최대값 끼리 곱인 것이다.?

