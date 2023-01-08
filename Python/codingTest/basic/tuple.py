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
tupleList = tuple([1,2,3]) # (1,2,3) 


def read_date():
    year, month, day = tuple(map(int, input().split()))
    return year, month, day

def print_date(date):
    year, month, day = date
    print("%02d/%02d/%04d" % (month,day,year))
def advance_day(date):
    year, month, day = date
    
    # end_of_month = (month == 1 and day == 31) or \
               # (month == 2 and day == 28) or \
               # (month == 3 and day == 31) or \
               # (month == 4 and day == 30) or \
               # (month == 5 and day == 31) or \
               # (month == 6 and day == 30) or \
               # (month == 7 and day == 31) or \
               # (month == 8 and day == 31) or \
               # (month == 9 and day == 30) or \
               # (month == 10 and day == 31) or \
               # (month == 11 and day == 30) or \
               # (month == 12 and day == 31)
    
    #end_of_month = (month in [1, 3, 5, 7, 8, 10, 12] and day == 31) or \
    #                     (month in [4, 6, 9, 11] and day == 30) or \
    #                     (month == 2 and day == 28)
    
    end_of_month = (month, day) in [(1, 31), (2, 28), (3, 31), (4, 30), (5,
        31), (6, 30), (7, 31), (8, 31), (9, 30), (10, 31), (11, 30), (12, 31)]
    
    end_of_year = month == 12 and day == 31
    
    if end_of_month:
        if end_of_year:
            year += 1
            month = 1
            day = 1
        else:
            month += 1
            day = 1
    else:
        day += 1
    
    return year, month, day
    
today = read_date()
print_date(today)
tomorrow = advance_day(today)
print_date(tomorrow)
