X = int(input())

a = X // 10
b = X % 10
result = (b*10) + (a + b)%10
cnt = 1

while result != X:
  cnt += 1
  a = result // 10
  b = result % 10
  result = (b*10) + (a + b)%10

print(cnt)
