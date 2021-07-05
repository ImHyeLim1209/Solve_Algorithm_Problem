// https://app.codility.com/programmers/lessons/8-leader/equi_leader/
// 방법1) 나눈 다음 각각에서 leaer 찾는다 -> N^2 시간초과
function solution2(A) {
    let x = 0;

    const getLeader = (start, end, arr) => {
        const length = end - start + 1;
        const leaderCnt = Math.ceil((length + 1) / 2);
        const hash = {};
        for (let i = start; i <= end; i++) {
            const num = arr[i];
            if (!hash[num]) hash[num] = [num];
            else hash[num] = [...hash[num], num];

            if (hash[num].length >= leaderCnt) return hash[num][0];
        }
        return -1;
    };

    const leaderHash = {};
    while (x < A.length) {
        let leader1 = getLeader(0, x, A);
        let leader2 = getLeader(x + 1, A.length - 1, A);

        if (leader1 !== -1 && leader1 === leader2) {
            leaderHash[leader1] = leaderHash[leader1] ? leaderHash[leader1] + 1 : 1;
        }
        x++;
    }

    let max = 0;
    for (const leader in leaderHash) {
        if (leaderHash[leader] > max) max = leaderHash[leader];
    }
    return max;
}

// 방법2) 전체의 leader를 찾은 후 나눠진 두 배열 모두 leader가 과반수 이상 존재하면 cnt++
//        전체의 리더가 아닌 다른 리더가 더 많은 count를 가질 수는 없다..
function solution(A) {
  let x = 0;

  const getLeader = (A) => {
    const cnt = Math.ceil((A.length + 1) / 2);
    const hash = A.reduce((acc, cur) => {
      acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
      return acc;
    }, {});

    for (const key in hash) {
      if (hash[key] >= cnt) return [key, hash[key]].map(Number);
    }
    return [-1, -1];
  }

  const getLength = (start, end) => {
    return end - start + 1;
  }

  const getLeaderCnt = (length) => {
    return Math.ceil((length + 1) / 2);
  }

  const [leader, leaderCnt] = getLeader(A);
  let cnt1 = 0;
  let cnt2 = leaderCnt;

  let cnt = 0;
  for (let i = 0; i < A.length; i++) {
    let leaderCnt1 = getLeaderCnt(getLength(0, i));
    let leaderCnt2 = getLeaderCnt(getLength(i + 1, A.length - 1));

    if (A[i] === leader) {
      cnt1++;
      cnt2--;
    }

    if (cnt1 >= leaderCnt1 && cnt2 >= leaderCnt2) cnt++;
  }
  return cnt;
}
