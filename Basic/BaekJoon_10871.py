n, x = map(int, input().split())
arr = input().split()
result = [e for e in arr if int(e) < x]

print(' '.join(result))
