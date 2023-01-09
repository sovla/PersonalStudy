#  다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
#  지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
#  지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.


# board는 n * n 배열입니다.
# 1 ≤ n ≤ 100
# 지뢰는 1로 표시되어 있습니다.
# board에는 지뢰가 있는 지역 1과 지뢰가 없는 지역 0만 존재합니다.

# board : [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]	
# result : 16

def change(board,row,col):
    try:
        if(row < 0 or col < 0 ):
            return
        if(board[row][col] != 1):
            board[row][col] = 2
    except:
        return
def solution(board:list):
    answer = 0
    for row,value in enumerate(board):
        for col,value in enumerate(value):
            if value == 1:
                change(board,row-1,col-1) 
                change(board,row-1,col+1) 
                change(board,row-1,col) 
                change(board,row+1,col-1) 
                change(board,row+1,col+1) 
                change(board,row+1,col) 
                change(board,row,col-1) 
                change(board,row,col+1) 
    for row in board:
        for col in row:
            if col == 0:
                answer += 1 
    print(board)    
    return answer
print(solution([[1,0,0],[0,0,0],[0,0,0]]))