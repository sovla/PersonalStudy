# 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

# lines가 [[0, 2], [-3, -1], [-2, 1]]일 때 그림으로 나타내면 다음과 같습니다.

# lines의 길이 = 3
# lines의 원소의 길이 = 2
# 모든 선분은 길이가 1 이상입니다.
# lines의 원소는 [a, b] 형태이며, a, b는 각각 선분의 양 끝점 입니다.
# -100 ≤ a < b ≤ 100

counts = list(map(lambda x: 0,list(range(0,250))))
def solution(lines):
    result = 0
    for line in lines:
        maxCount = max(line)
        minCount = min(line)
        for i in list(range(minCount,maxCount)):
            counts[100 -i] += 1
    for i in counts:
        if i >= 2:
            result += 1
    return result


