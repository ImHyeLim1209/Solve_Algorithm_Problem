#방법1) min에서 45빼는 계산을 먼저하고 min이 음수가 되면 처리한다.
hour, min = map(int, input().split())

#1. 45분을 뺀다.
min -= 45

#2. 값이 음수라면 시간을 바꿔야 하는 상황
if(min < 0):
    #hour 처리
    hour -= 1
    if(hour < 0):
        hour = 23
    
    #min 처리
    min = 60 + min

print("{} {}".format(hour, min));

################################################

#방법2) 시간을 분으로 환산하여 45를 빼고 다시 시간으로 만든다.
hour, min = map(int, input().split())

#1. 시간을 분으로 환산 후 45를 뺀다.
totalMin = hour * 60 + min - 45

#2. 분을 다시 시간 + 분으로 만든다.
hour = totalMin // 60 % 24 # %24: 0-23 범위가 나오도록 정규화
min = totalMin % 60

print(hour, min)
