//https://programmers.co.kr/learn/courses/30/lessons/17686
//제출답안
function solution(files) {
  const hash = {} //hash로 결과값을 memo한다.
  const separate = (str) => {
    hash[str] = [];
    const lowerStr = str.toLowerCase();
    const match = /\d+/.exec(lowerStr); //exec를 이용하여 number와 number가 시작하는 index를 찾아낸다.
    const head = lowerStr.slice(0, match.index);
    const number = match.toString();
    const tail = lowerStr.slice(match.index + match.toString().length, lowerStr.length);

    hash[str].push(head);
    hash[str].push(number);
    hash[str].push(tail);

    return [head, number, tail];
  }

  const isBigger = (a, b) => {
    const [headA, numberA, tailA] = hash[a] ? hash[a] : separate(a);
    const [headB, numberB, tailB] = hash[b] ? hash[b] : separate(b);

    if (headA !== headB) return headA < headB ? -1 : headA === headB ? 0 : 1;
    if (numberA !== numberB) return Number(numberA) - Number(numberB);
    return tailA < tailB ? -1 : tailA === tailB ? 0 : 1;
  }

  return files.sort((a, b) => {
    return isBigger(a, b);
  });
}

//다른 답안: 정규표현식으로 head-number 한 번에 분리
function solution(files) {
  let answerWrap = files.map((file, index) => ({ file, index }));
  const compare = (a, b) => {
    ///(\D*)([0-9]{1,5})(.*)/i;  이면 tail부분도 같이 분리됨
    const reg = /(\D*)([0-9]*)/i; //정규표현식을 ()로 구분해놓으면 
    const A = a.match(reg); //'img10.png' -> A['img10', 'img', '10'] 이렇게 분리됨(grouping)
    const B = b.match(reg);
    const compareHead = A[1].toLowerCase().localeCompare(B[1].toLowerCase());
    const compareNumber = (a, b) => {
      return parseInt(a) > parseInt(b) ?
        1 : parseInt(a) < parseInt(b) ?
          -1
          : 0
    }
    return compareHead === 0 ? compareNumber(A[2], B[2]) : compareHead
  }
  answerWrap.sort((a, b) => {
    const result = compare(a.file, b.file);
    return result === 0 ? a.index - b.index : result;
  })
  return answerWrap.map(answer => answer.file);
}
