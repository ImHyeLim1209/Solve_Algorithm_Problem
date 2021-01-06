#수행시간이 작은 일부터 수행하면 다음 사람에게 응답하는 시간이 짧아지므로 다음 사람의 대기시간이 짧아진다 -> 전체시간 
import sys
input = sys.stdin.readline

N = int(input())
times = [*map(int, input().split())]
takeTime = 0
total = 0

times.sort()

for element in times:
  takeTime += element
  total += takeTime

print(total)
