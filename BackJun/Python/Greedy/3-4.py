# 숫자 1까지 
# N K가 주어질때 
# 1. N -1 을 한다.
# 2  N / K 를 한다.
# 위 규칙을 통해 몇번 만에 1이 되는가

N,K = map(int, input().split())

C = 0
while(N != 1):
    C+= 1
    if(N % K == 0 ):
        N /= K
    else:
        N-= 1    


print(C)

