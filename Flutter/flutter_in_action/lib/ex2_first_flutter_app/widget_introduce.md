# 위젯 소개

## 위젯 개념

Flutter의 거의 모든 객체가 위젯입니다.
위젯 개념은 UI요소 뿐만 아니라 제스처 감지,App테마 데이터 전송등 넓은 의미 입니다.

## 위젯 인터페이스

```dart
@immutable
abstract class Widget extends DiagnosticableTree {
  const Widget({ this.key });

  final Key? key;

  @protected
  @factory
  Element createElement();

  @override
  String toStringShort() {
    final String type = objectRuntimeType(this, 'Widget');
    return key == null ? type : '$type-$key';
  }

  @override
  void debugFillProperties(DiagnosticPropertiesBuilder properties) {
    super.debugFillProperties(properties);
    properties.defaultDiagnosticsTreeStyle = DiagnosticsTreeStyle.dense;
  }

  @override
  @nonVirtual
  bool operator ==(Object other) => super == other;

  @override
  @nonVirtual
  int get hashCode => super.hashCode;

  static bool canUpdate(Widget oldWidget, Widget newWidget) {
    return oldWidget.runtimeType == newWidget.runtimeType
        && oldWidget.key == newWidget.key;
  }
  ...
}
```

-   @immutable 어노테이션은 이 위젯이 불변하다는 것을 의미합니다.이는 위젯에 정의된 속성을 불변으로 제한합니다. Flutter에서 속성이 변경된 위젯은 새로운 위젯 인스턴스를 반환하기에 해당 속성을 변경하는 것은 아무 의미가 없습니다.
-   DiagnosticableTree는 디버깅 정보를 제공하기 위해 상속하고 있습니다.
-   Key 이 속성은 React/Vue와 유사하며, 주요 기능은 새로운 build시 해당 위젯을 재사용할지 여부를 결정하는 것입니다. 결정 조건은 canUpdate() 메서드에 있습니다.
-   createElement : Flutter 프레임 워크가 UI 트리를 빌드 할때 먼저 이 메서드를 호출하여 Element를 리턴 받아 해당 노드의 객체를 생성합니다.이 메서드는 Flutter 프레임워크에서 암시적으로 호출되며 기본적으로 개발 중에는 호출되지 않습니다.
-   debugFillProperties(...) : 부모 클래스를 재정의 하는 방법을 주로 진단 트리의 일부 특성을 설정하는 것입니다.
-   canUpdate(...) : 위젯 트리를 재구축할 때 주로 build 이전 위젯을 재사용하는 데 사용되는 정적 메서드로 특히 새 위젯 개체를 사용하여 이전 UI에서 해당 개체의 구성을 업데이트할지 여부를 확인 합니다.

## Flutter의 4개의 트리

Widget UI 변경에 따른 Flutter 프레임 워크 처리 흐름

1. 위젯 트리를 기반으로 요소 트리를 생성합니다. 생성된 트리 노드는 모두 Element 클래스입니다.
2. 렌더 트리는 요소트리에서 생성되며 렌더 트리 노드는 모두 RenderObject 클래스에서 상속 됩니다.
3. 레이어 트리는 렌더링 트리를 기반으로 생성됩니다.레이어 트리 노드는 Layer 클래스입니다.

```
Container(
  color: Colors.blue,
  child: Row(
    children: [
      Image.network('https://www.example.com/1.png'),
      const Text('A'),
    ],
  ),
);
// 배경을 지정 하였기에 Container 내부에선 ColoredBox를 리턴한다.
if (color != null)
  current = ColoredBox(color: color!, child: current);
```

<img src="https://book.flutterchina.club/assets/img/2-2.59d95f72.png" />

> 참고 :

1. 세가지 트리에서 widget과 Element는 일대일 대응 관계에 있지만 RenderObject와 일대일 대응 관계는 아닙니다.
2. 렌더링 트리는 화면이 표시되기 전에 레이어 트리를 생성합니다.

## 무상태 위젯(Stateless)

```dart
class ContextRoute extends StatelessWidget  {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Context测试"),
      ),
      body: Container(
        child: Builder(builder: (context) {
          Scaffold scaffold = context.findAncestorWidgetOfExactType<Scaffold>();
          return (scaffold.appBar as AppBar).title;
        }),
      ),
    );
  }
}
```

1. StatelessWidget 상태를 유지할 필요가 없는 시나리오에 사용되며 일반적 build 메서드에 다른 위젯을 중첩하여 UI를 빌드하고 구성 프로세스 중에 중첩된 위젯을 재귀적으로 빌드합니다.
2. build 메소드에는 위젯 트리의 현재 widget Context를 나타내는 클래스의 인스턴스인 Context 매개변수가 하나 있으며 각 위젯은 컨텍스트 객체에 해당합니다.(각 위젯은 위젯 트리의 노드이기 때문에)
   BuildContext는 사실 context 현재 위젯이 위젯 트리 위치에서 관련 연산을 수행하기 위한 핸들로, 현재 위젯에서 상위 위젯 트리를 탐색하고 위젯 유형에 따라 상위 위젯을 찾는 방법을 제공합니다.

## 상태 위젯(Stateful)

무상태 위젯과 동일하지만 StatefulWidget에서 상속되고 메서드 widget을 재정의하면 createElement()에서 반환된 Element 개체가 동일하지 않고 StatefulWidget 클래스에 새 인터페이스가 추가 되었다는 차이점이 createState()에 있습니다.

```dart
abstract class StatefulWidget extends Widget {
  const StatefulWidget({ Key key }) : super(key: key);

  @override
  StatefulElement createElement() => StatefulElement(this);

  @protected
  State createState();
}
```

-   statefulElement에 해당하는 Element 클래스에서 간접적으로 상속됩니다. State 객체를 생성하기 위해 여러번 호출될 수 있습니다.
-   createState() StatefulWidget과 관련된 상태를 생성하는데 사용되며 상태위젯의 수명 주기에서 여러 번 호출될 수 있습니다. 예를 들어 StatefulWidget이 위젯 트리의 여러 위치에 동시에 삽입되면 Flutter 프레임 워크는 이 메서드를 호출하여 기본적으로 StatefulElement 해당하는 State 인스턴스인 각 위치에 독립적인 State 인스턴스를 생성합니다
    > StatefulWidget 에서 State와 StatefulElement는 일대일 때응하는 관계로 Flutter SDK 문서에서 트리에서 STate 객체 제거, 트리에 STate 객체 삽입 과 같은 설명을 자주 볼 수 있습니다. attime은 위젯 트리에 의해 생성된 요소트리를 나타냅니다.

## 상태

1. 소개
   StatefulWidget 클래스는 State 클래스에 해당하고 State는 해당 StatefulWidget이 유지해야 하는 상태를 나타내며 State에 저장된 상태 정보는 다음과 같을 수 있습니다.

-   위젯이 빌드될 때 동기적으로 읽을 수 있습니다.
-   위젯 수명 주기에서 변경할 수 있습니다.
-   아이디 변경

## 위젯 트리에서 상태 객체 가져오기

## RenderObject를 통한 위젯 사용자 정의

## Flutter SDK 내장 컴포넌트 라이브러리
