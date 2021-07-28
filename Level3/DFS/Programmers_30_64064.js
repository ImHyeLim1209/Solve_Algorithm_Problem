// https://programmers.co.kr/learn/courses/30/lessons/64064
// 1. 정규표현식으로 각 제재아이디에 해당하는 후보군을 만든다.
// 2. dfs로 경우의 수를 계산한다.
//    -sort와 set을 이용하여 중복되는 경우의 수를 제거한다.

function solution(user_id, banned_id) {
  const getRegExp = (id) => {
    const str = "\^(" + id.replace(/\*/g, ".") + "\)$";
    return new RegExp(str);
  }

  const getCandidate = (id) => {
    const reg = getRegExp(id);
    const mappingIDs = {};
    for (const uid of user_id) {
      if (reg.test(uid)) mappingIDs[uid] = true;
    }
    return mappingIDs;
  }
  const candidates = banned_id.map((id) => getCandidate(id));

  const results = new Set();
  const aux = (idx, picks) => {
    if (idx >= banned_id.length) {
      results.add(Object.keys(picks).sort().join(","));
    }

    let sum = 0;
    for (const candidate in candidates[idx]) {
      if (picks[candidate] !== undefined) continue;
      picks[candidate] = true;
      sum += aux(idx + 1, picks);
      delete picks[candidate];
    }
    return sum;
  }
  aux(0, {});
  return results.size;
}

console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["*rodo", "*rodo", "******"])); // 2
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"])); // 2
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo", "******", "******"])); // 3
