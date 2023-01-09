# 함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.

def solution(n):
    result = list(str(n))
    result.sort()
    result.reverse()

    answer = ""
    for i in result:
        answer += i

    return int(answer)

print(
    solution(118372)
)

# 다른 사람 소스
def solution(n):
    ls = list(str(n))
    ls.sort(reverse = True)
    return int("".join(ls))