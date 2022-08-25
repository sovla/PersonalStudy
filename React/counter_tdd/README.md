# 간단한 카운터 테스트

## 테스팅을 하는 이유

1. 디버깅 시간 단축
2. 안정적인 어플리케이션 (결함,장애,에러 예방)
3. 재설계 시간의 단축

## React Testing Library 란?

Behavior Driven Test(행위 주도 테스트) 방법론이 대두 되면서 함께 주목 받기 시작한 테스팅 라이브러리입니다.

RTL의 경우 React 구성 요소 작업을 위한 API를 추가하여 DOM Testing Library 위에 구축됩니다.
DOM Testing Library란 Dom 노드를 테스트하기 위한 매우 가벼운 솔루션 입니다.

### 구현 주도(Enzyme) vs 행위 주도(RTL)

```html
<h2 class="title">제목</h2>
```

Implementation Driven Test(구현 주도 테스트)의 경우 h2태그에서 h3태그로 변경시 테스트가 깨집니다. 그에 반해, Behavior Driven Test(행위 주도 테스트)의 경우 동일한 제목으로 보이기에 테스트가 깨지지 않습니다.

### DOM이란

D: Document
O: Object
M: Model
DOM(문서 객체 모델)은 XML, HTML 문서의 각 항목을 계층으로 표현하여 생성, 변형 삭제할 수 있도록 돕는 인터페이스이다.
