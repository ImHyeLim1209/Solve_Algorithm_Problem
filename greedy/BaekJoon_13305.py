#도시에 도착하면 자신의 가격보다 더 저렴한 곳 중 가장 가까운 곳까지의 거리만큼 기름을 사서 그 도시까지 이동한다.

###############
#방법1. 지금까지 중 가장 저렴한 가격을 기억한다.
#       현재 도시에서 다음도시로 이동하면서 1) 가격 지불 후  2) 이동한 도시의 가격이 지금까지 중 가장 저렴하면 가장 저렴한 가격을 갱신한다.  x 마지막 도시까지 반복

import sys
input = sys.stdin.readline

cityNum = int(input())

roads = [*map(int, input().split())]
costs = [*map(int, input().split())]
result = 0

purchaseCity = 0
for city in range(1, cityNum): #12
  result += costs[purchaseCity] * roads[city-1]
  if costs[purchaseCity] > costs[city]:
    purchaseCity = city

print(result)


###############
#방법2.도시에 도착하면 자신의 가격보다 더 저렴한 곳 중 가장 가까운 곳까지의 거리만큼 기름을 사서 그 도시까지 이동한다. 그대로 구현
import sys
input = sys.stdin.readline

cityNum = int(input())

roads = [*map(int, input().split())]
costs = [*map(int, input().split())]
result = 0

currentCity = 0
while currentCity < cityNum-1:
  currentCost = costs[currentCity]
  purchase = cityNum-1
  for j in range(currentCity, len(costs)):
    if currentCost > costs[j]:
      purchase = j
      break
  result += costs[currentCity] * sum(roads[currentCity:purchase])
  currentCity = purchase

print(result)
