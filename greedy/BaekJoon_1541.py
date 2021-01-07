####################
#풀이1. -를 기준으로 잘라 괄호를 친다. 첫 번째항은 계산하여 더하고 나머지 항은 계산하여 뺀다.
import sys
input = sys.stdin.readline

formula = input().split('-')
result = 0

result += sum([*map(int, formula[0].split('+'))])

for element in formula[1:]:
  result -= sum([*map(int, element.split('+'))])

print(result)

####################
#풀이2. -를 기준으로 괄호를 치면 -가 분배되어 +가 -로 변한다. 따라서 -가 등장한 후의 숫자들은 모두 -해주며 다시 -가 나오면 +한다.
import sys
input = sys.stdin.readline

operator = ['+','-',' ']
formula = input() + " "

numStr = ""
numInt = 0
isMinus = False
result = 0

for e in formula:
  if e in operator:
    numInt = int(numStr)
    numStr = ""
    if isMinus:
      result -= numInt
    else:
      result += numInt
    if e == '-':
      isMinus = True
  else: #숫자인 경우
    numStr += e

print(result)


####################
#풀이3. result에 더하기를 하다가 -가 나오면 그 뒤의 내용은 temp라는 곳에 더한다(temp=괄호안의 내용을 ). 다시 -가 나오거나 식이 끝나면 result - temp를 한다.
import sys
input = sys.stdin.readline

formula = input() + " "

numStr = ""
numInt = 0
isMinus = False
temp = 0
result = 0

for e in formula:
  if e == '+':
    numInt = int(numStr)
    numStr = ""
    if isMinus:
      temp = temp + numInt
    else:
      result = result + numInt
  elif e == '-':
    numInt = int(numStr)
    numStr = ""
    if isMinus:
      temp = temp + numInt
      result = result - temp
    else:
      result = result + numInt
      isMinus = True
    temp = 0
  elif e == ' ':
    numInt = int(numStr)
    if isMinus:
      temp += numInt
      result = result - temp
    else:
      result = result + numInt
  else: #숫자인 경우
    numStr += e

print(result)
