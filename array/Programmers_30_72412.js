//https://programmers.co.kr/learn/courses/30/lessons/72412
//제출답안: 효율성 실패
function solution(info, query) {
  const data = [];
  for (const str of info) {
    data.push(str.split(' '));
  }

  const isPassed = (query, info) => {
    const [qLang, qJob, qCareer, qFood, qScore] = query.split(' ').filter((value) => value !== 'and');
    const [lang, job, career, food, score] = info;

    if (qLang !== '-' && qLang !== lang) return false;
    if (qJob !== '-' && qJob !== job) return false;
    if (qCareer !== '-' && qCareer !== career) return false;
    if (qFood !== '-' && qFood !== food) return false;
    if (parseInt(score) < parseInt(qScore)) return false;

    return true;
  }

  return query.map((q) => {
    let cnt = 0;
    for (const row of data) {
      if (isPassed(q, row)) cnt++;
    }
    return cnt;
  });
}

//리팩토링1: query를 공백기준으로 split했을 때 and가 포함되므로 index가 짝수일 때만 비교를 한다 -> 20ms 정도 빠름
const isPassed = (query, info) => {
    const qValues = query.split(' ');
    const iValues = info;
    for (let i = 0; i <= qValues.length - 2; i += 2) {
      if (qValues[i] !== '-' && qValues[i] !== iValues[i / 2]) return false;
    }
    return Number(qValues[qValues.length - 1]) <= Number(iValues[iValues.length - 1]);
  }

//리팩토링2: data에 push하지 않고 미리 크기를 지정한 후 넣는다.
const data = [...Array(info)];
  for (let i = 0; i < info.length; i++) {
    data[i] = info[i].split(' ')
  }

//근본적인 해결방법: 분류하기
function solution(info, query) {
  const answer = [...Array(query.length)];
  const infoMap = {};

  const combination = (values, idx, score) => {
    const key = values.join('');
    if (infoMap[key]) infoMap[key].push(score);
    else infoMap[key] = [score];

    for (let i = idx + 1; i < values.length; i++) {
      const value = values[i];
      values[i] = '-';
      combination(values, i, score);
      values[i] = value;
    }
  }

  const binarySearch = (arr, start, end, score) => {
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (arr[mid] >= score) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return start;
  }

  for (let i = 0; i < info.length; i++) {
    const values = info[i].split(' ');
    const score = Number(values.pop());
    combination(values, -1, score);
  }

  for (const key of Object.keys(infoMap)) {
    infoMap[key].sort((a, b) => a - b);
  }

  for (let i = 0; i < query.length; i++) {
    const values = query[i].split(' ').filter((value) => value !== 'and');
    const score = Number(values.pop());
    const key = values.join('');

    if (!infoMap[key]) {
      answer[i] = 0;
    } else {
      const result = binarySearch(infoMap[key], 0, infoMap[key].length - 1, score);
      answer[i] = infoMap[key].length - result
    }
  }
  return answer;
}

//레퍼런스?
function solution(info, query) {
  // info의 크기는 50K
  // query의 크기는 100K
  // info에 대해서 query를 전부 검사하는 것은 시간 복잡도 실패
  // info를 인덱싱하는 문제

  const props = [
    ['cpp', 'java', 'python'],
    ['backend', 'frontend'],
    ['junior', 'senior'],
    ['chicken', 'pizza'],
  ];

  let applicants = {};
  const indexProps = (parent, depth) => {
    if (depth === props.length) return;
    props[depth].forEach((p) => {
      if (depth === props.length - 1) parent[p] = [];
      else parent[p] = {};
      indexProps(parent[p], depth + 1);
    });
  };
  indexProps(applicants, 0);

  info.forEach((person) => {
    const [stack, fb, level, food, score] = person.split(' ');
    applicants[stack][fb][level][food].push(Number(score));
  });

  const cache = {};
  const getApplicants = (parent, props, depth) => {
    if (depth === props.length) return parent;

    if (props[depth] === '-') {
      return Object.values(parent).reduce((acc, item) => {
        return acc.concat(getApplicants(item, props, depth + 1));
      }, []);
    } else {
      return getApplicants(parent[props[depth]], props, depth + 1);
    }
  };
  const cnt = [];
  query.forEach((q) => {
    const [st, fb, lv, fd, sc] = q.replace(/\sand\s/g, ' ').split(' ');
    const props = [st, fb, lv, fd];
    const propStr = props.join(',');
    if (cache[propStr] === undefined) {
      cache[propStr] = getApplicants(applicants, props, 0).sort(
        (a, b) => a - b
      );
    }

    if (sc === '-') cnt.push(cache[propStr].length);
    else {
      const num = Number(sc);
      let left = 0;
      let right = cache[propStr].length - 1;
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (num <= cache[propStr][mid]) right = mid - 1;
        else left = mid + 1;
      }
      cnt.push(cache[propStr].length - left);
    }
  });
  return cnt;
}
