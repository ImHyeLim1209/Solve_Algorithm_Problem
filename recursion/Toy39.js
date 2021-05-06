//공장의 조립 기계가 고장이 나 수리를 위해 여러 명의 수리공들이 왔습니다. 조립 기계는 일자 형태로 길게 배치되어 있기 때문에 수리공들 또한 나란히 위치해서 수리를 진행해야 합니다. 
//기계의 각 부품은 한 명의 수리공만 수리할 수 있고, 이동을 최소화하기 위해 각 수리공들은 서로 연속해서 있는 부품만 수리해야 합니다. 
//각 부품을 수리하는 데 걸리는 작업량은 제각각이고, 수리 시간은 작업량에 비례합니다. 작업량과 수리공들의 수가 주어질 때, 전체 수리가 가장 빠르게 끝나는 시간을 리턴해야 합니다.
//=자연수 배열을 n개의 연속 구간으로 나눌 때, 합이 가장 큰 구간의 합을 sum이라고 합시다. sum이 가장 작아지는 분배에서의 sum을 구해야 합니다.

//제출답안: 시간초과
const jobAllocation = function (jobs, wokersNum) {
  let max = Number.MAX_SAFE_INTEGER;
  const aux = (idx, select) => {
    if (select.length === wokersNum - 1) { //다 나누었다면 sum 계산하기
      const result = [];
      let sum = 0;
      for (let i = 0; i < jobs.length; i++) {
        sum += jobs[i];
        if (select.includes(i) || i === jobs.length - 1) {
          result.push(sum);
          sum = 0;
        }
      }
      const maxJob = Math.max(...result);
      max = max > maxJob ? maxJob : max
      return;
    }
    for (let i = idx; i < jobs.length; i++) {
      aux(i + 1, [...select, i])
    }
  }
  aux(0, [])
  return max;
};

//레퍼런스: 제출답안과 아이디어는 비슷하나, memoization을 통해 중복계산을 최소화한다.
const jobAllocation = function (jobs, wokersNum) {
  const memo = []
  for (let i = 0; i < wokersNum; i++) memo.push(Array(jobs.length).fill(-1));

  //마지막 사람의 업무량을 미리 계산한다.
  let workload = 0;
  for (let i = jobs.length - 1; i >= wokersNum - 1; i--) {
    workload = workload + jobs[i];
    memo[wokersNum - 1][i] = workload;
  }

  //나머지 계산하기
  const aux = (workerIdx, jobIdx, jobs, left) => {
    if (memo[workerIdx][jobIdx] !== -1) return memo[workerIdx][jobIdx];

    let min = Number.MAX_SAFE_INTEGER;
    let workload = 0;
    for (let i = jobIdx; i < jobs.length - left; i++) {
      workload += jobs[i];
      const hardest = Math.max( //2명씩 비교한다.
        workload,
        aux(workerIdx + 1, i + 1, jobs, left - 1)
      );
      min = min > hardest ? hardest : min;
    }
    memo[workerIdx][jobIdx] = min;
    return min;
  }
  return aux(0, 0, jobs, wokersNum - 1);//left: 남은 사람 수
};
