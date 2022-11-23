# 큰수의법칙 N 배열의 크기 , M 숫자가 더해지는 횟수, K 연속으로 더할 수 있는 횟수
# 입력 조건 첫째 줄에 N(2 <= N <= 1000, M(1 <= M <= 10000), K (1 <= K <= 10000)의 자연수가 주어지며, 각 자연수는 공백으로 구분한다.
# 둘째 줄에 1이상 10000이하의 자연수가 공백으로 구분되어 나열된다.
# 입력으로 주어지는 K는 항상 M보다 작거나 같다

n,m,k = map(int, input().split())

data = list(map(int, input().split()))

data.sort()

first = data[n-1]
second = data[n-2]

result = 0

while True:
    for i in range(k):
        if m == 0:
            break
        result += first
        m -= 1
    if m == 0:
        break
    result += second
    m -= 1

print(result)


# 만약 위 문제가 M이 100억 이상으로 커진다면 시간 초과 판정을 받게 될 것 이다.
# 간단한 수학적 아이디어를 활용해 더 효율적으로 문제를 해결 해보자
# N 2 M 8 N 3 -> 2 4 5 4 6 
# 6 + 6 + 6 + 5 + 6 + 6 + 6 + 5 = 46 
# int(M / (K + 1)) * K + M % (K + 1) 