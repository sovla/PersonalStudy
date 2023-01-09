# 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.
from functools import reduce
def solution(numbers):
    return reduce(lambda x, y: x + y, numbers) / len(numbers)

# 다른 사람이 한것중에 가장 간단해 보임
def solution(numbers):
    return sum( numbers) / len(numbers)