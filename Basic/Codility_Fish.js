// https://app.codility.com/programmers/lessons/7-stacks_and_queues/fish/
function solution(A, B) {
  const stack = [];
  const UP = 0;
  const DOWN = 1;

  for (let i = 0; i < A.length; i++) {
    //const [size, direction] = [A[i], B[i]];
    // 스택이 비었거나, 지금 물고기가 아래 방향이면 일단 넣는다.
    if (stack.length === 0 || B[i] === DOWN) {
      stack.push([A[i], B[i]]);
      continue;
    }

    // 물고기가 위 방향인데 스택 마지막 요소가 아래방향이 아니면 넣는다.
    if (B[i] === UP && stack[stack.length - 1] === UP) {
      stack.push([A[i], B[i]]);
      continue;
    }

    // 물고기가 위 방향이면서 스택 마지막 요소가 아래방향이면 대결
    // 지금 물고기가 이겼다면 계속 비교해나간다.
    // 스택이 비었거나 같은 방향(UP)일 때까지...
    let winner = [A[i], B[i]];
    while (stack.length > 0 && stack[stack.length - 1][1] !== B[i]) {
      const [size, direction] = stack.pop();
      if (size > A[i]) {
        winner = [size, direction];
        break;
      }
      else continue; // 이러면 스택에서 또다른 물고기 꺼내서 비교
    }
    stack.push(winner);
  }
  return stack.length;
}

console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]));
