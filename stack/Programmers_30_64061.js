//https://programmers.co.kr/learn/courses/30/lessons/64061
/////////////////////////////////////////////
//1. 문제 그대로 구현
function grabDoll(board, move){ //board를 for문 돌려 row를 가져오고 각 row의 move 번째 요소 중 0이 아닌 것 가져오기 
    let result = null;
    board.some((row) => {
        if(row[move-1] !== 0){
            result = row[move-1];
            row[move-1] = 0;
            return true;
        }
    })
    return result;
}

function checkBasket(basket){ //basket에 요소를 넣고 중복이면 제거하기. 중복발생 갯수를 리턴.
    let comboCnt = 0;
    while(true){
        if(basket.length > 1){
            let top = basket.length-1;
            if(basket[top] === basket[top-1]){
                comboCnt += 1;
                basket.pop();
                basket.pop();
            }else{
                break;
            }
        }else{
            break;
        }
    }
    return comboCnt;
}

function solution(board, moves) {
    let answer = 0;
    let basket = []; 
    
    for(let move of moves){
        let element = grabDoll(board, move);
        if(element != null){ //인형을 뽑지 못한 경우를 제외
            basket.push(element);
            answer += (checkBasket(basket) * 2);
        }
    }
    return answer;
}


///////////////////////////////////////////
//2. 
