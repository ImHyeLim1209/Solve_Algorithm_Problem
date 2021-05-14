//https://programmers.co.kr/learn/courses/30/lessons/12981
//제출답안
function solution(n, words) {
  //이전에 나온 답을 말하거나 끝말잇기가 안되면 탈락!
  let lastChar = words[0].charAt(0);
  let player = 0;
  let round = 1;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (lastChar !== word.charAt(0) || words.slice(0, i).includes(word)) return [player + 1, round];

    lastChar = word.charAt(word.length - 1);
    player = (player + 1) % n;
    if (player === 0) round++;
  }
  return [0, 0];
}

//리팩토링: round와 player를 따로 구할 필요가 없다.
function solution(n, words) {
  let lastChar = words[0].charAt(0);
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (lastChar !== word.charAt(0) || words.slice(0, i).includes(word))
      return [i % n + 1, parseInt(i / n) + 1];
    lastChar = word.charAt(word.length - 1);
  }
  return [0, 0];
}
