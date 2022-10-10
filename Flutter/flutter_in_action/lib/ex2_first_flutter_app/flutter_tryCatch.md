# 예외 캡처

플러터 예외 캡처에 도입하기 전에 Dart 단일 스레드 모델을 이해해야 하며 Dart의 코드 실행 프로세스를 이해해야만 예외를 캡처할 위치를 알 수 있습니다.

## 다트 단일 스레드 모델

JAVA및 Object-C에서 예와가 발생하고 catch되지 않으면 프로그램이 종료되지만 Dart,JS는 그렇지 않습니다!
그 이유는 작동 메커니즘과 관련이 있습니다. Java,OC의 경우 모두 멀티 스레딩 모델을 사용하는 프로그래밍 언어입니다. 어떤 스레드가 예외를 트리거하고 예외가 Catch 되지 않으면 전체 프로세스가 종료됩니다.
하지만 Dart,JS는 싱글 스레드 언어이고 작동 메커니즘은 매우 유사합니다.(차이점은 존재합니다)
아래 그림을 통해 Dart의 일반적인 작동 원리를 살펴보겠습니다

![](https://book.flutterchina.club/assets/img/2-21.eb7484c9.png)

Dart는 **두 개의 작업 대기열을 포함하는 단일 스레드에서 메시지 루프 매커니즘**으로 실행 됩니다.

-   마이크로 태스크 대기열 : Dart 내부에서 발생하며 마이크로 작업은 거의 없습니다
-   이벤트 대기열 : IO, 타이머, 클릭, 그리기 이벤트 등 모든 외부 이벤트 작업

그림에서 보다 싶이 두 대기열 중 우선순위가 높은 것은 마이크로 태스트 대기열 입니다.

### 실행과정

엔트리 함수 main() 이 실행된 후 메시지 루프 메커니즘이 시작 됩니다.
마이크로 작업 대기열에 있는 작업은 선입선출의 순서로 하나씩 실행됩니다.
이벤트 작업 또한 선입 선출로 처리되며 이벤트 대기열이 비어있을경우 앱이 종료 됩니다.
Flutter 전체 스레드의 실행 프로세스는 항상 루프에 있기 때문에 종료 되진 않습니다.

### 이벤트,마이크로태스트 대기열

Dart에서 IO, 타이머, 클릭, 그리기 이벤트 등 모든 외부 이벤트 작업이 이벤트 대기열에 있으며 마이크로 작업은 일반적으로 Dart 내부에서 발생하며 마이크로 작업은 거의 없습니다.
마이크로 작업이 너무 많으면 총 실행 시간이 길어지고 이벤트 대기열 작업이 지연이 길어집니다. 따라서 마이크로 작업 대기열이 너무 크지 않도록 해야 합니다.
Future.microtask(...) 메소드를 통해 마이크로 태스크 대기열에 태스크를 삽입 가능 하단 점에 주목 하시면 됩니다.

이벤트 루프 작업에서 예와가 발생하고 CATCH되지 않으면 프로그램이 종료되지 않으며 직접적인 결과는 현재 작업의 후속 코드가 실행 되지 않는다는 것입니다.

## 플러터 예외 캡처

Dart는 try/catch/finally코드 블록 예외를 캡처하는 데 사용할 수 있습니다. 이것은 다른 프로그래밍 언어와 유사합니다

### Flutter 프레임워크 예외 캡처

```dart
@override
void performRebuild() {
 ...
  try {

    built = build();
  } catch (e, stack) {

    built = ErrorWidget.builder(_debugReportException('building $this', e, stack));
  }
  ...
}
```

### 기타 예외 캡처 및 로그 수집

Flutter에는 null 객체 메서드 예외, Future의 예외를 호출하는 것과 같이 Flutter가 포착하지 못하는 몇 가지 예외가 있습니다. Dart에서 예외는 동기 예외와 비동기 예외의 두 가지 범주로 나뉩니다. 동기 예외는 try/catchcatch될 수 있지만 비동기 예외는 더 골칫거리입니다. 다음 코드는 Future예외를 catch할 수 없습니다.

```dart
try{
    Future.delayed(Duration(seconds: 1)).then((e) => Future.error("xxx"));
}catch (e){
    print(e)
}
```

runZoned(...)Dart에는 실행 객체에 대한 Zone을 지정할 수 있는 메소드가 있습니다. Zone은 코드 실행 환경의 범위를 나타냅니다. 이해의 편의를 위해 독자는 Zone을 코드 실행 샌드박스와 비교할 수 있습니다. 다른 샌드박스는 격리됩니다. 샌드박스는 Zone과 같은 일부 코드 동작을 캡처, 가로채기 또는 수정할 수 있습니다. 로그 출력, 타이머 생성, 마이크로 작업 스케줄링 동작 및 영역은 처리되지 않은 모든 예외도 캡처할 수 있습니다. runZoned(...)아래의 메서드 정의 를 살펴보겠습니다.

```dart
R runZoned<R>(R body(), {
    Map zoneValues, // 인스턴스를 통해 얻을 수 있는 Zone의 private zone[key]
    ZoneSpecification zoneSpecification, // Zone의 일부 구성에서는 로그 출력 및 오류 가로채기와 같은 일부 코드 동작을 사용자 지정할 수 있습니다.
})
```

```dart
runZoned(
  () => runApp(MyApp()),
  zoneSpecification: ZoneSpecification(

    print: (Zone self, ZoneDelegate parent, Zone zone, String line) {
      parent.print(zone, "Interceptor: $line");
    },

    handleUncaughtError: (Zone self, ZoneDelegate parent, Zone zone,
                          Object error, StackTrace stackTrace) {
      parent.print(zone, '${error.toString()} $stackTrace');
    },
  ),
);
```

이런 식으로 printAPP에서 로그를 출력하는 모든 호출 방법을 가로채어 응용 프로그램에 로그를 기록할 수도 있고 응용 프로그램이 잡히지 않는 예외를 트리거하면 예외 정보와 로그를 통일된 방식으로 보고할 수 있습니다.

### 최종 오류 보고 코드

```dart
void collectLog(String line){
    ... // 로그 수집
}
void reportErrorAndLog(FlutterErrorDetails details){
    ... //오류 보고 및 로직 로그
}

FlutterErrorDetails makeDetails(Object obj, StackTrace stack){
    ...// 빌드 오류 메시지
}

void main() {
  var onError = FlutterError.onError; //오류 발생시 먼저 저장
  FlutterError.onError = (FlutterErrorDetails details) {
    onError?.call(details); //기본 onError 호출
    reportErrorAndLog(details); //신고
  };
  runZoned(
  () => runApp(MyApp()),
  zoneSpecification: ZoneSpecification(
    // 프린트 가로채기
    print: (Zone self, ZoneDelegate parent, Zone zone, String line) {
      collectLog(line);
      parent.print(zone, "Interceptor: $line");
    },
    // 처리되지 않은 비동기 오류 가로채기
    handleUncaughtError: (Zone self, ZoneDelegate parent, Zone zone,
                          Object error, StackTrace stackTrace) {
      reportErrorAndLog(details);
      parent.print(zone, '${error.toString()} $stackTrace');
    },
  ),
 );
}
```
