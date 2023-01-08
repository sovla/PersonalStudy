from functools import reduce  ## reduce

def sumOfDigits(num):
    sum = 0
    for c in list(str(num)):
        sum += int(c)

    return sum

if __name__ == '__main__':
    print(sumOfDigits(47253))
    print(sumOfDigits(643))

# 줄기와잎
score = [0, 0, 2, 4, 7, 7, 9, 11, 11, 13, 18, 20]
stem_leaf = []
i = 0
while i*10 <= max(score):
    for j in score:
        if j >= i * 10 and j <(i + 1)  * 10:
            len(stem_leaf) < i +1 and stem_leaf.append([])
            stem_leaf[i].append(j % 10 )
    i += 1

j = 0
for stem in stem_leaf:
    # print("%d: %s" %j %stem) 
    # print("{j}: {stem}".format(j,stem))
    print(f"{j}: {stem}")
    j += 1


# map을 이용한 자리수 더하기
def sumOfDigitsWithMap(num):
    done = map(lambda x: int(x),list(str(num)))
    return sum(done)

print(sumOfDigitsWithMap(47253))
print(sumOfDigitsWithMap(643))

# 소수 구하기
L = list(range(2, 30))
D = [2,3];      

for i in L:
    demical = False
    for j in D:
        if i % j == 0:
            demical = True
            break

    if demical == False:
        D.append(i)       

print(D)


# 진법 구하기
number = 87
array = []
while number > 0:
    div,mod =divmod(number,2)
    array.append(mod)
    number = div
array.reverse()
print(array)