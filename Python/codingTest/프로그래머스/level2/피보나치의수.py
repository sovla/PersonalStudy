# 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

# 예를들어

# F(2) = F(0) + F(1) = 0 + 1 = 1
# F(3) = F(1) + F(2) = 1 + 1 = 2
# F(4) = F(2) + F(3) = 1 + 2 = 3
# F(5) = F(3) + F(4) = 2 + 3 = 5
# 와 같이 이어집니다.

# 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요


memoization = {
    0: 0,
    1: 1
}


def pivo(n):
    if memoization.get(n) != None:
        return memoization.get(n)
    else:
        result = pivo(n-1) + pivo(n-2)
        memoization[n] = result
        return result


def solution(n):

    for i in range(n+1):
        if memoization.get(i) == None:
            memoization[i] = memoization[i-1] + memoization[i - 2]

    return memoization[i] % 1234567

    # Exceeds the limit (4300) for integer string conversion; use sys.set_int_max_str_digits() to increase the limit

# 다른 사람 풀이


def fibonacci(num):
    a, b = 0, 1
    for i in range(num):
        a, b = b, a+b
    return a


print(solution(100000))
