//문제: 선물 상자에 대한 정보를 담은 배열과 문자열을 입력받아 조건에 맞는 선물이 있는지 여부를 리턴
//입출력 예시
/*const giftBox = ['macbook', 'mugcup', ['eyephone', 'postcard'], 'money'];
let output = unpackGiftbox(giftBox, 'iphone');
console.log(output); // --> false
output = unpackGiftbox(giftBox, 'postcard');
console.log(output); // --> true*/


function unpackGiftbox(giftBox, wish) {
  let result = false;
  if(giftBox.length === 0){
    return false;
  }

  for(let i = 0; i< giftBox.length; i++){
    if(giftBox[i] === wish){
      return true;
    }
    if(Array.isArray(giftBox[i])){
      //result = result || unpackGiftbox(giftBox[i], wish); //방법1
      if(unpackGiftbox(giftBox[i], wish) === true){         //방법2
        return true;
      }
    }
  }
  return result;
}
