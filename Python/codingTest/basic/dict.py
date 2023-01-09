# 딕셔너리 
a = {}
b = dict()
type(a) ## dictionary
type(b) ## dictionary

# 추가 방법
a.update({"done":"ok"})
print(a) # {'done'; 'ok'}
print(a["done"]) # "ok"

# 파이썬 dictionary 삭제 방법
del a["done"]

print(a)

# 숫자 바로 읽기 
def korean_number(number):
    dictionaryNumber = {0:"영",1:"일",2:"이",3:"삼",4:"사",5:"오",6:"육",7:"칠",8:"팔",9:"구",}
    print(dictionaryNumber[number])

korean_number(3)
korean_number(6)
korean_number(9)

# 정신 질환 문제  dictionary 형태로 단어를 저장 
txt = '''신경발달장애 Neurodevelopmental Disorders
조현병 스펙트럼 및 기타 정신병적 장애 Schizophrenia Spectrum and Other Psychotic Disorders
양극성 및 관련 장애 Bipolar and Related Disorders
우울장애 Depressive Disorders
불안장애 Anxiety Disorder
강박 및 관련 장애 Obsessive－Compulsive and Related Disorders
외상 및 스트레스 관련 장애 Trauma－and Stressor－Related Disorders
해리장애 Dissociative Disorders
신체증상 및 관련 장애 Somatic Symptom and Related Disorders
급식 및 섭식장애 Feeding and Eating Disorders
배설장애 Elimination Disorders
수면－각성 장애 Sleep－Wake Disorders
성기능부전 Sexual Dysfunctions
성별 불쾌감 Gender Dysphoria
파괴적, 충동조절 및 품행 장애 Disruptive, Impulse－Control, and Conduct Disorders
물질관련 및 중독 장애 Substance－Related and Addictive Disorders
신경인지장애 Neurocognitive Disorders
성격장애 Personality Disorders
변태성욕장애 Paraphilic Disorders
기타 정신질환 Other Mental Disorders'''

def getDictionary():
    keywords ={}
    for line in txt.splitlines():
        for i in range(len(line)):
            if(ord(line[i]) >= 65 and ord(line[i]) <= 122): # 영어 인경우
                keywords.update({
                    line[:i-1]:line[i:]
                })
                break
    return keywords        
print(getDictionary())




