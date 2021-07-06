// https://app.codility.com/programmers/lessons/12-euclidean_algorithm/chocolates_by_numbers/
// 양수 N과 M이 있다.
// 너는 초콜렛을 먹을 것이며, 초콜렛을 먹고난 후에는 포장지만 남는다.
// 0번부터 초콜렛을 먹는다.

//초콜렛 X를 먹었다면 다음에는 (X+M) % N 번의 초콜렛을 먹는다.
//너는 빈 포장지를 만나면 먹는 것을 멈춘다.
// N: 원에 놓여진 초콜렛 갯수. 0~N-1범위

// [N, M] = [10, 4] => 10개의 초콜렛. 0부터 시작
// 0 => 4 => 8 => 2 => 6 / => 0
// 너가 먹을 초콜릿은 총 5개!

// 범위는 100억정도 -> 직접 세는거 안될듯. 계산식을 생각하자.
// 느낌이 뭔가 N과 M의 최대공배수 구해서 LCM / 4 인느낌
function solution(N, M) {
  const getGCD = (a, b) => {
    if (b === 0) return a;
    return getGCD(b, a % b);
  }
  return (N * M) / getGCD(N, M) / M;
}
