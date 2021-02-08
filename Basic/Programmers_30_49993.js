//https://programmers.co.kr/learn/courses/30/lessons/49993
////1. 각 스킬 트리의 스킬들을 하나씩 보면서 순서대로 있는지 step이라는 변수를 통해 확인한다.
function solution(skill, skill_trees) {
  return skill_trees.filter((tree) => {
    let step = 0;
    for (let node of tree) {
      if (skill.indexOf(node) != -1) {
        if (skill[step] === node) { step++; }
        else { return false; }
      }
    }
    return true;
  }).length;
}

////2. 위처럼 if의 중첩이 길어지면 아래와 같이 반대로 continue해야하는 상황을 거른 후 처리하는 것으로 if문의 중첩을 줄일 수 있다.
function solution(skill, skill_trees) {
  return skill_trees.filter((tree) => {
    let step = 0;
    for (let node of tree) {
      if (skill.indexOf(node) === -1) continue;
      if (skill[step] === node) { step++; continue; }
      return false;
    }
    return true;
  }).length;
}

////3. 정규표현식을 사용할 수도 있다. : 문자열 변수를 정규표현식 적용을 하고 싶을 때는 아래와 같이 객체를 활용한다.
function solution(skill, skill_trees) {
    var answer = 0;
    var regex = new RegExp(`[^${skill}]`, 'g');

    return skill_trees
        .map((x) => x.replace(regex, ''))
        .filter((x) => {
            return skill.indexOf(x) === 0 || x === "";
        })
        .length
}
