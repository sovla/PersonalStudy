def solution(n:int):
    answer = 0
    for i in list(range(0,len(f"{n}"))):
        

        n = n // 10
        answer += n % 10

    return answer


print(solution(12345))