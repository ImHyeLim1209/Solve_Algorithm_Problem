//https://programmers.co.kr/learn/courses/30/lessons/67256?language=javascript
////////////////////
//1. 키패드에 따른 손의 위치를 Hash로 저장
function solution(numbers, hand) {
  const resultArr = [];
  const Location = { 
    1: [0, 0], 2: [0, 1], 3: [0, 2],
    4: [1, 0], 5: [1, 1], 6: [1, 2],
    7: [2, 0], 8: [2, 1], 9: [2, 2],
    '*': [3, 0], 0: [3, 1], '#': [3, 2]
  }
  let leftPosition = Location['*'];
  let rightPosition = Location['#'];

  const findClosetHand = (target) => {
    const leftDistance = Math.abs(leftPosition[0]-Location[target][0]) + Location[target][1] - leftPosition[1];
    const rightDistance = Math.abs(rightPosition[0]-Location[target][0])+ rightPosition[1] - Location[target][1];
    let result = hand;

    if(hand === "left") result = (leftDistance <= rightDistance)?  "left" : "right"
    else result = (leftDistance < rightDistance)?  "left" : "right"

    return result;
    }
  
  const moveHand = (movedHand, target) => {
    if(movedHand === "left") {
      resultArr.push("L");
      leftPosition = Location[target];
    } else {
      resultArr.push("R");
      rightPosition = Location[target];
    }
  }

  numbers.forEach(element => {
    if(element % 3 === 1) {
      moveHand("left", element);
    } else if(element % 3 === 2 || element === 0){
      moveHand(findClosetHand(element), element);
    }
    else {
      moveHand("right", element);
    }
  });

  return resultArr.join('');
}
