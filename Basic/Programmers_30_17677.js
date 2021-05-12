//https://programmers.co.kr/learn/courses/30/lessons/17677

//제출답안
function solution(str1, str2) {

  const getHash = (str) => {  //2글자씩 끊어 hash를 만드는 함수
    const hash = {};
    for (let i = 0; i < str.length - 1; i++) {
      const key = str.substring(i, i + 2);
      if (!/[A-Z]{2}/g.test(key)) continue;
      hash[key] = hash[key] ? hash[key] + 1 : 1;
    }
    return hash;
  }

  const getIntersectionCnt = (hash1, hash2) => {
    let cnt = 0;
    for (let key in hash1) {
      cnt += hash2[key] ? Math.min(hash1[key], hash2[key]) : 0;
    }
    return cnt;
  }

  const getUnionCnt = (hash1, hash2) => {
    const hash = Object.assign(hash1); //new Set([...hash])
    for (let key in hash2) {
      hash[key] = hash[key] ? Math.max(hash[key], hash2[key]) : hash2[key];
    }
    return Object.values(hash).reduce((acc, cnt) => { return acc + cnt }, 0);
  }

  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();

  const hash1 = getHash(str1);
  const hash2 = getHash(str2);

  if (Object.keys(hash1).length === 0 && Object.keys(hash2).length === 0) return 65536;

  const intersection = getIntersectionCnt(hash1, hash2);
  const union = getUnionCnt(hash1, hash2);

  return parseInt(intersection / union * 65536);
}

//리팩토링: 배열로 계산하기
function solution (str1, str2) {

  function explode(text) { //두글자씩 끊은 배열을 만든다.
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);
      if (node.match(/[A-Za-z]{2}/)) {
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]); //모든 key들을 담은 Set
  let union = 0;
  let intersection = 0;

  set.forEach(item => {
    const has1 = arr1.filter(x => x === item).length;
    const has2 = arr2.filter(x => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  })
  return union === 0 ? 65536 : Math.floor(intersection / union * 65536);
}
