// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem
// Anagram: 구성하는 알파벳의 종류와 갯수만 같으면 가능
// 방법1)
// 1. 1개짜리 Anagram을 구한다.
// 2. 2개짜리 Anagram을 구한다.
// 3. 3개짜리 Anagram을 구한다...

// 모든 substring의 카운트를 구한다.(단, 정렬되어있어야함)
function sherlockAndAnagrams(s) {
  if (s.length === 1) return 1;
  if (s.length === 2) return 2;

  const counter = {};
  for (let len = 1; len < s.length; len++) {
    for (let i = 0; i < s.length - len + 1; i++) {
      const str = Array.from(s.slice(i, i + len)).sort().join("");
      counter[str] = counter[str] ? counter[str] + 1 : 1;
    }
  }

  let cnt = 0;
  for (const key in counter) {
    const value = counter[key];
    if (value === 1) continue;
    cnt += value * (value - 1) / 2;
  }

  return cnt;
}

console.log(sherlockAndAnagrams("abba")); // 4
console.log(sherlockAndAnagrams("abcd")); // 0
console.log(sherlockAndAnagrams("ifailuhkqq")); // 3
console.log(sherlockAndAnagrams("kkkk")); // 10
