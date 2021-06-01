//https://programmers.co.kr/learn/courses/30/lessons/43162
function solution(n, computers)
{
  //1. 각 노드가 어떤 네트워크에 속해있다면 true
  const isVisited = Array(n).fill(false);
  let cnt = 0;

  //2. dfs 경로 탐색
  const aux = (start) =>
  {
    if (start >= n)
    {
      return;
    };

    for (let i = 0; i < n; i++)
    {
      if (computers[start][i] === 1 && isVisited[i] === false)
      {
        isVisited[i] = true;
        aux(i);
      }
    }
  }

  //네트워크에 아직 속해있지 않은 노드들을 dfs 탐색을 한다.
  for (let i = 0; i < n; i++)
  {
    if (isVisited[i] === false)
    {
      cnt++;
      isVisited[i] = true;
      aux(i);
    }
  }
  return cnt;
}
