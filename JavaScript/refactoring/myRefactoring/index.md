# 직접 리팩토링을 해보자

## 상품 일괄등록 개요
상품 사진과 엑셀을 읽어들여(.excel,.jpg,.gif,.png) 시스템에 상품으로 등록하는 기능

## 리팩토링을 맘 먹은 이유
코드를 짜면서 돌아가면 그만.. 생각을 가지고 코딩 했으나 
최근 글귀중에 "프로그램이 정상적으로 돌아가면 그부분 부터 시작이다." 말을 보고 좀 더 보기 좋은 코드를 작성하기 위해 (나 자신,내 소스를 볼 타인) 리팩토링 해보자! 

### 순서도
1. 쇼핑몰 전체 카테고리 읽어들이기.
2. 파일선택기에서 원하는 형태의 확장자 파일을 불러오기(Stream)
3. 그 중 엑셀 파일을 읽어 들여 양식에 맞는지 체크
4. 엑셀 파일 내용중 필수 값이 있는지 확인후 상품 모델 형식에 맞게 변환
5. 변환된 모델을 서버에 업데이트 
6. 상품 이미지 서버에 업로드 
7. 카테고리중 엑셀에 지정한 카테고리와 동일한 카테고리로 상품 id 넣어주고 서버 업데이트

### 첫 소감
- 일단 함수가 하는 기능이 너무 많음. 덜어내는게 먼저 일듯
- 함수내에서 만든 함수를 부르는등 화면을 위 아래로 옮겨야 되는 상황이 많음.
- 이미지를 .jpg .png 안붙이는 경우 등을 생각하다 보니 replaceAll이 덕지 덕지 붙여져 있어 원래 기능을 살피는데 어려움이 있음
- 이미지 파일을 80mb 한꺼번에 불러올 경우 라이브러리에서 크러쉬가 나는 경우가 있어 Stream으로 변경 하였는데 이 과정에서 코드가 너무 길어짐

### 기능 기준으로 덜어내기
1. 카테고리 과정을 분리 (category.dart) 430줄에서 403 줄로 줄어듬.
2. 이미지 파일 스트림 처리 분리
3. 양식 체크 및 모델 형식으로 변환 분리

### 중복된 코드 덜어내기
1. replaceAll 덜어내기 <- 이소스 때문에 원래 의도가 가려짐 

### 임시 변수 없에기 





