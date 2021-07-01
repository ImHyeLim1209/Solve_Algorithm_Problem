// https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/
// stack 구조를 사용한다.
// 가장 마지막 요소에 따라 stack에 pop 하거나 push 한다.
// 가장 마지막 요소와 동일하다면 continue한다.
// 가장 마지막 요소에 따라 생각한다.

// [5,9,8,9,5] 를 생각해보자
// 8이 되는 순간 5는 사용할 수 있지만 9는 사용할 수 없다. 따라서 9는 pop한다.
// 다음 9가 왔을 때 이전의 9가 남아있더라도 사용할 수 없는 상태이다. 따라서 pop 하는게 맞음.
// 마지막 5가 왔을 때 스택에는 [5, 8, 9] 가 남아있는데, 이 요소들을 모두 찾을 것이 아니라,
// 하나씩 pop 하면서 5를 찾아가야한다. 왜냐하면, 5가 새롭게 놓이는 순간부터 뒤의 요소들은 8, 9의 블럭을 사용할 수 없기 때문이다.

function solution(H) {
  let cnt = 0;
  const stack = [];

  let i = 0;
  while (i < H.length) {
    if (stack.length === 0) {
      stack.push(H[i]);
      i++;
    } else if (stack[stack.length - 1] === H[i]) {
      i++;
    } else if (stack[stack.length - 1] < H[i]) {
      stack.push(H[i]);
      i++;
    } else if (stack[stack.length - 1] > H[i]) {
      stack.pop();
      cnt++;
    }
  }
  return cnt + stack.length;
}
