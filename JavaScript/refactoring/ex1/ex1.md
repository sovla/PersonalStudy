# 리팩터링 1단계
테스트 코드 작성
# statement 함수 쪼개기
첫 목표는 switch 문을 함수로 추출한다
함수로 추출할때 주의점
- 추출시 지역변수,전역변수를 확인해 어떻게 내보낼지, 어떻게 받을지 결정한다

# 함수 쪼개기 후 이름 리팩토링 
pref -> aPerformance 명확하게 이름 변경 매개변수의 역할이 뚜렷하지 않을경우 a/an 부정 관사를 붙여 표현한다.
thisAmount -> result 리턴해주는 값은 result로 명확하게 이름 변경

명언 타임 - 컴퓨터가 이해하는 코드는 바보도 작성할 수 있다. 사람이 이해하도록 작성하는 프로그래머가 진정한 실력자다 -켄트백

# play 변수 제거하기 인라인 변수 제거하기 
기존 코드를 보면 plays는 statement 매개변수로 받아 perf의 playID에 따라  값을 변환 해주었는데 이 과정에서 perf(개별공연) 값에 따라 play 값을 리턴해주기에 함수로 따로 추출해서 복잡도를 낮춰 보자 


1. const play = plays[aPerformance.playID]; 
2. const play = playFor(aPerformance);
3. play 지우고 playFor(aPerformance) 로 변경

# format 함수 추출 및 이름 변경, 공통 기능 추출
format을 통해 달러로 값을 바꿔 주는 기능을 추출하고 
이름 또한 format이 아닌 usd로 변환 
기존 가격에서 / 100 해주던 공통 기능을 한곳으로 모으는 리팩토링 진행 

# volumnCredits,totalAmount 함수화 
과정 
- 반복문 쪼개기
    ```
    for (let perf of invoice.performances) {
        volumeCredits += volumnCreditsFor(perf);
    }
    ```
- 함수 추출하기
    ```
    function totalVolumnCredits() {
    let result = 0;
    for (let perf of invoice.performances) {
        result += volumnCreditsFor(perf);
    }
    return result;
    }
    ```
- 인라인 변수 제거
    ```
    result += `적립 포인트 : ${volumeCredits}점\n`;
    ---- 변경 ----
    result += `적립 포인트 : ${totalVolumnCredits()}점\n`;
    ```

# 계산 단계와 포맷팅 단계 분리하기
이전까지 한 리팩토링은 프로그램의 논리적 요소를 파악하기 쉽도록 코드의 구조를 보강하는 데 주안점을 두고 리팩토링했습니다.
```
function statementRefactoringSwitch(invoice) {
  let result = `청구 내역 (고객명: ${invoice.customer})\n`;

  for (let perf of invoice.performances) {
    result += ` ${playFor(perf).name}: ${usd(amountFor(perf))} (${
      perf.audience
    }석)\n`;
  }

  result += `총액: ${usd(totalAmount())}\n`;
  result += `적립 포인트 : ${totalVolumnCredits()}점\n`;
  return result;
}
```
현재는 7줄짜리 HTML 작성 코드만 보이는 상황입니다. 많이 나아졌지만 여기서 문제는 분리된 계산 함수들이 텍스트 버전인 statement() 안에 중첩 함수로 들어 있는 것입니다. 이것을 해결 하기 위해 단계 쪼개기를 통해 나눌 것입니다.

함수 쪼개기 -> 계산 단위분리 두 과정을 거친뒤 함수는 재사용 가능한 함수로 변했다!

# 값, 적립금 금액을 계산하는 클래스를 만들자.
조건식을 계속 사용해도 되지만 다형성을 이용해 확장성,유지보수 좋은 코드를 만들어 보겠습니다.

기존 스위치 구문에서 더 확장성 있는 코드가 되었습니다. 
- 스위치 구문을 통해 작성하면 좋은점 한눈에 보인다. 단점 다음번에 사용할때 또 똑같이 작성해야 되며 만약 변경 사항이 생길 경우엔? 미친다 미쳐.. 다형성 구조적인 부분에 대해 공부 된것 같아 매우 기분이 좋네요

# 정리
- 함수 추출하기
- 인라인 제거
- 함수 옮기기
- 조건부 로직을 다형성으로 바꾸기

와이펫에 가장 필요한 부분인 조건부 로직 다형성으로 바꾸기 이부분이 크게 도움이 된것 같다. 이 책의 저자는 항상 리팩토링을 할때 단계 나누기 한꺼번에 무언갈 할려고 하지말고, 단계 쪼개기를 통해 컴파일 - 테스트 - 커밋 단계를 꼭 지키라고 말하고 있다. 
명언 타임 - 좋은 코드를 가늠하는 확실한 방법은 얼마나 수정하기 쉬운가다.
