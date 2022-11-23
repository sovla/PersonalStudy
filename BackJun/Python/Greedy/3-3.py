# 난이도 1 | 시간 제한 1초 | 메모리 제한 128MB
# N x M 배열의 카드가 있다. 그중 가장 높은 카드를 뽑아야 되며 규칙은 아래 와 같다
# 1. 먼저 뽑고자 하는 카드가 포함 되어 있는 행을 선택한다
# 2. 그다음 선택된 행에 포함된 카드들 중 가장 숫자가 낮은 카드를 뽑아야 한다.
# 3. 그 중 가장 높은 카드를 가져 오면 된다.

# n,m = map(int, input().split())

# result = 0
# for i in range(n):
#     data = list(map(int, input().split()))
#     min_value = min(data)
#     result = max(result,min_value)

# print(result)

# 이중 반복문을 통해 푸는 법
n,m = map(int, input().split())

result = 0

for i in range(n):
    data = list(map(int, input().split()))
    min_value = 10001
    for j in data:
        min_value = min(min_value,j)

    result = max(min_value,result)

print(result)
 
    