#1. 회의가 빨리 끝나면 다음으로 할 수 있는 회의가 많다 -> 최대한 많은 회의 가능(***)
#2. 차례대로 회의를 넣는다면 빨리 시작할 수록 시간표를 많이 채울 수 있다.
#3. tuple은 값을 변경할 수 없으므로 list보다 자원효율적이다.

import sys
input = sys.stdin.readline
N = int(input())
meetings = [tuple(map(int, input().split()))for _ in range(N)]
num = 0
end = 0

meetings = sorted(meetings, key=lambda x:(x[1], x[0]))

for e in meetings:
  if end <= e[0]:
    num += 1
    end = e[1]

print(num)
