# 1. import Module
import math
# 2. from Module import name or *
from math import * 

# 1 번 사용법
math.log

# 2 번 사용법
log
log = print()

# 다시 불러오기
from importlib import reload

reload(math)

# import
import calendar
# 모듈 내용 알아보기
print(dir(calendar))
print([x for x in dir(calendar) if 'leaf' in x])

# help(calendar.isleap)


# 피타고라스 정의
def hypotenuse(a,b):
     c= math.sqrt(a**2+b **2)
     print(c)
hypotenuse(3,4)
hypotenuse(10,20)


import calendar
c = calendar.TextCalendar()
m = c.formatmonth(2021, 2)
print(m)

# import tkinter as tk

# s = "Life is short\nUse Python"

# root = tk.Tk()
# t = tk.Text(root, height=10, width=100)
# t.insert(tk.END, m)
# t.pack()
# tk.mainloop()


## 인터프리터 제어 라이브러리
import sys
# >>> import sys
# >>> sys.ps1                                  # 현재의 프롬프트는?
# '>>> '
# >>> sys.ps1 = '^^; '                         # 요걸로 바꿔!
# ^^; print('hello')
# hello
# ^^; 5 * 3
# 15
# ^^;

import os
print(os.getcwd()) # getcwd는 실행한 작업 디렉토리를 보여줍니다.


