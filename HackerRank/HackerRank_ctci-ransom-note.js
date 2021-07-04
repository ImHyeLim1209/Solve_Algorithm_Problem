https://www.hackerrank.com/challenges/ctci-ransom-note/problem
// 매거진에 있는 단어만 사용해야해. (단어의 substring 같은건 안돼)
// 횟수도 포함
function checkMagazine(magazine, note) {
  const hash = magazine.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  for (const word of note) {
    if (!hash[word] || hash[word] === 0) return "No";
    hash[word]--;
  }
  return "Yes";
}

console.log(checkMagazine("two times three is not four".split(" "), "two times two is four".split(" ")));
