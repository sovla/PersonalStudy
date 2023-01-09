class Singer:
    name = ''
    def sing(self):
        return "Lalalal~"


taeji = Singer()
taeji.sing()

class Person:
    # 눈 두 개, 코 하나, 입 하나...
    eyes = 2
    nose = 1
    mouth = 1
    ears = 2
    arms = 2
    legs = 2

    # 먹고 자고 이야기하고...
    def eat(self):
        print('얌냠...')

    def sleep(self):
        print('쿨쿨...')

    def talk(self):
        print('주절주절...')

class Student(Person):     # Person 클래스를 상속받음
    def study(self):
        print('열공열공...')


class Fridge:
    def __init__(self): # 생성자
        self.isOpened = False
        self.foods = []
    
    def open(self):
        self.isOpened = True
        print('냉장고 문을 열었어요...')
    
    def put(self, thing):
        if self.isOpened:
            self.foods.append(thing)
            print('냉장고 속에 음식이 들어갔네...')
        else:
            print('냉장고 문이 닫혀있어서 못넣겠어요...')
    
    def close(self):
        self.isOpened = False
        print('냉장고 문을 닫았어요...')

class Food:
    pass

# __init__ 메서드(초기화
# __del__ 메서드(소멸)
# __repr__ 메서드(print 오버라이드)
class Food:
    def __repr__(self):
        return  "print"

print(Food()) # print
# __add__ 메서드(덧셈)
class Shape:
    area = 0
    def __init__(self, area):
        self.area = area
    def __add__(self,other):
        return self.area + other.area
a ,b  =Shape(10),Shape(5)
print(a + b) # 15
