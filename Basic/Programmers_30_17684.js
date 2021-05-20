//https://programmers.co.kr/learn/courses/30/lessons/17684
//제출답안
function solution(msg) {
  const dictionary = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13,
    N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26
  }

  const getLongestWord = (idx) => {
    let word = msg[idx];
    while (dictionary[word]) {
      idx++;
      word += msg[idx];
    }
    return [word.slice(0, word.length - 1), idx - 1];
  }

  const result = [];
  let idx = 0;
  msg += ' '; //마지막 요소도 함께 넣기 위해 공백 추가
  while (idx < msg.length - 1) { //마지막 요소가 추가되었으므로 length-1
    const [word, endIdx] = getLongestWord(idx);
    result.push(dictionary[word]);

    const newWord = word + msg[endIdx + 1];
    dictionary[newWord] = Object.keys(dictionary).length + 1;

    idx = endIdx + 1;
  }
  return result;
}

//리팩토링 요소
//1. dictionary를 array로 바꾸고 indexOf로 찾는다.
const dictionary = [''].concat([...Array(26).keys()].map(v => String.fromCharCode(v + 65)));
const dictionary = [..." ABCDEFGHIJKLMNOPQRSTUVWXYZ"];


