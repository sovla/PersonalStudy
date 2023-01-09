# set 
fruits = {'apple', 'banana', 'orange'}

companies = {'apple', 'microsoft', 'google'}
print(fruits) # {"apple","banana","orange"}



print(list(fruits))

# 집합
print(fruits & companies) # {"apple"}
print(fruits | companies) # {'banana', 'google', 'apple', 'orange', 'microsoft'}
print(fruits ^ companies) # {'banana', 'google', 'orange', 'microsoft'}

list_of_sets = [fruits, companies]
#   교집합
print(set.intersection(*list_of_sets)) # {"apple"}
#   합집합
print(set.union(*list_of_sets)) # {'microsoft', 'orange', 'apple', 'banana', 'google'}

#   set 
S1 = {1,2,3,4,5,6,7}
S2 = {4,5,6}
print(S1 - S2) # {1,2,3,7}

dice1 = (1,2,3,4,5,6)
dice2 = (1,2,3,4,5,6)

# print(dice1 + dice2)

dice1 = (1, 2, 3, 4, 5, 6)
dice2 = (2, 3, 5, 7, 11, 13)
diceSumSet = set()
for i in dice1:
    for j in dice2:
        diceSumSet.add(i+j)

print(diceSumSet)