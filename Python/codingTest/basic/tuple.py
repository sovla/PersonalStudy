# 튜플은 리스트와 비슷한 자료형  사용방식은 아래 참고
a = 10
b = 20
b,a = a,b
# 1. 변수의 값을 변경 해줄때
print(a,b) # 20 10

# 2. arguments *을 통해 x,y외에 파라미터를 rest변수로 처리
def magu_print(x,y, *rest):
    print(x, y, *rest)

magu_print(1,2,3,4,5,6,7,8,9)

# 선언
empty = ()
# 원소 하나만 있는경우 ,쉼표로 표시
oneTuple = 5,

# 튜플은 리스트와 달리 원소값을 직접 변경이 불가, 복사하여 재할당 해주는 방식으로 사용
p = (1,2,3)
q = p[:1] + (5,) + p[2:]
print(q) # (1,5,3)

# 튜플에서 리스트로 리스트에서 튜플로
list = list(p) # [1,2,3]
tuple = tuple([1,2,3]) # (1,2,3) 