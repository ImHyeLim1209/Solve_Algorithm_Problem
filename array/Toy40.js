//문자열을 입력받아 부분 문자열 중 가장 긴 회문의 길이 리턴하기

//제출: 시간초과
let longestPalindrome = function (str) {
  //방법1: 한 문자를 기준으로 같은 문자가 있는지 확인. 같은 문자가 있다면 점차 다가가면서 회문인지 확인한다.
  //해당 문자열이 회문이 맞는지 확인한다.
  let max = -1;
  const isPalindrome = (str, start, end) => {
    let result = true;
    for (let i = start, j = end; i <= j; i++, j--) {
      if (str[i] !== str[j]) return false;
    }
    return result;
  }
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j] && isPalindrome(str, i, j)) {
        max = max < j - i + 1 ? j - i + 1 : max;
      }
    }
  }
  return max;
};

//레퍼런스: 길이별로 회문을 구한다. 이미 회문이 있다면 회문으로 부터 1칸씩만 더 비교하면 더 긴 회문이 존재하는지 확인할 수 있다.
let longestPalindrome = function (str) {
  if (str.length < 2) return str.length;

  const LENGTH = str.length;
  const isPalinrome = Array(LENGTH)
    .fill(false)
    .map(() => Array(LENGTH).fill(false));
  let maxLen = 1;

  //1. 길이 1인 회문
  for (let i = 0; i < LENGTH; i++) isPalinrome[i][i] = true;

  //2. 길이 2인 회문
  for (let i = 0; i < LENGTH - 1; i++) {
    if (str[i] === str[i + 1]) {
      isPalinrome[i][i + 1] = true;
      maxLen = 2;
    }
  }

  //3. 길이 3 이상인 회문
  for (let len = 3; len <= LENGTH; len++) {
    for (let startIdx = 0; startIdx <= LENGTH - len; startIdx++) {
      const endIdx = startIdx + len - 1;
      if (isPalinrome[startIdx + 1][endIdx - 1] === true && str[startIdx] === str[endIdx]) { //안쪽 문자열이 회문인지 확인한다.
        isPalinrome[startIdx][endIdx] = true;
        maxLen = len;
      }
    }
  }
  return maxLen;
};
