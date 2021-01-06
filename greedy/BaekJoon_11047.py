#최소의 동전수 = 최대한 큰 단위의 동전 사용
#큰 단위의 동전은 작은 단위 동전의 배수이므로 Greedy
N, K = map(int, input().split())
for i in range(N):
    coins.append(int(input()))
num = 0
 
while K>0:
  coin = coins.pop()
  num += K//coin
  K %= coin
 
print(num)
