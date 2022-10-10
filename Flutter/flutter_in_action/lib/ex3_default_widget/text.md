# 텍스트와 스타일

## 텍스트

`Text`간단한 스타일 텍스트를 표시하는데 사용되며 테스트의 표시 스타일을 제어하는 몇 가지 속성이 포함되어 있습니다.

```dart
Text("hello world",
    textAlign:TextAlign.left
)
Text("hello world" * 4,
    maxLines: 1,
    overflow: TextOverflow.ellipsis,
)
Text("hello world",
    textScaleFactor: 1.5
)
```

![텍스트 실행결과](https://book.flutterchina.club/assets/img/3-1.e95eb747.png)
텍스트 실행결과 이미지

-   `textAlign` : 텍스트 가로 정렬 기준, 기본값은 왼쪽정렬
-   `maxLines`,`overflow` : 텍스트가 표시하는 최대 줄 수를 지정합니다. 기본값은 자동 줄 바꿈입니다. 초과된 텍스트가 있는경우 overflow 기본 속성인 잘림 형태로 되지만 예시에선 ... 형태로 나오게끔 되어있습니다.
-   `textScaleFactor` : 현재 글꼴 크기를 기준으로 한 텍스트의 배율을 나타내며, 텍스트의 스타일 속성 설정을 기준으로 글꼴 크기를 조정합니다. 이 속성의 기본값은 `MediaQueryData.textScaleFactor`를 통해 얻을 수 있으며 그렇지 않은 경우 기본값은 1.0입니다.

## 텍스트 스타일

`TextStyle` 색상,글꼴,두께,배경 등 과 같은 텍스트 표시 스타일을 지정하는 데 사용 됩니다.

```dart
Text("Hello world",
  style: TextStyle(
    color: Colors.blue,
    fontSize: 18.0,
    height: 1.2,
    fontFamily: "Courier",
    background: Paint()..color=Colors.yellow,
    decoration:TextDecoration.underline,
    decorationStyle: TextDecorationStyle.dashed
  ),
);
```

-   `height`: 이 속성은 행 높이를 지정하는데 fontSize \* height를 통해 정해집니다.
-   `fontFamily` : 다른 플랫폼은 기본적으로 다른 글꼴 세트를 지원하므로 글꼴을 수동으로 지정하기 전에 다른 플랫폼에서 테스트해야 합니다.
-   `fontSize` : 이 속성은 글꼴 크기를 제어하는 데 사용 됩니다.
    -   `fontSize` : 글꼴 크기는 정확하게 지정할 수 있으며 크기`textScaleFactor` 조정을 통해서만 제어할 수 있습니다.
    -   `textScaleFactor` : 시스템 글콜 크기 설정이 변경될 때 Flutter 앱의 글꼴을 전역적으로 조정하는 데 주로 사용되며 `fontSize` 일반적으로 단일 텍스트에 사용되며 글꼴 크기는 시스템 글꼴 크기 변경을 따르지 않습니다.

## 텍스트 스팬

Text 내용중 일부를 다르게 표시할때 사용하는 위젯입니다.

```dart
const TextSpan({
  TextStyle style,  // text:String 의 스타일
  Sting text, // String 텍스트
  List<TextSpan> children, // TextSpan을 통해 여러 텍스트를 표시
  GestureRecognizer recognizer,// 텍스트 세그먼트에서 제스처를 인식하는데 사용
});

Text.rich(TextSpan(
    children: [
     TextSpan(
       text: "Home: "
     ),
     TextSpan(
       text: "https://flutterchina.club",
       style: TextStyle(
         color: Colors.blue
       ),
       recognizer: _tapRecognizer
     ),
    ]
))
```

![텍스트 스팬 그림](https://book.flutterchina.club/assets/img/3-4.cc415da2.png)

-   `Text.rich`메서드를 통해 Text에 추가하는데, 그 이유는 Text는 실제 RichText의 wrapper이고 RichText는 다양한 Styled(rich)를 표시할 수 있기 때문입니다.
-   `_tabRecognizer`의 경우 링크를 클릭한 후의 프로세스, 제스처 인식에 대한 내용입니다.

## 기본 텍스트 스타일

`DefaultTextStyle` 위젯을 활용하면 아래에 있는 텍스트 위젯에 동일한 텍스트 스타일 적용이 가능하다.
`Text` 위젯의 `inherit`속성을 false로 바꿀시 적용을 거부할 수 있다.

```dart
DefaultTextStyle(
  //1.기본 텍스트 스타일
  style: TextStyle(
    color:Colors.red,
    fontSize: 20.0,
  ),
  textAlign: TextAlign.start,
  child: Column(
    crossAxisAlignment: CrossAxisAlignment.start,
    children: <Widget>[
      Text("hello world"),
      Text("I am Jack"),
      Text("I am Jack",
        style: TextStyle(
          inherit: false, //2.부모 상속 거부
          color: Colors.grey
        ),
      ),
    ],
  ),
);
```

![](<img src="https://book.flutterchina.club/assets/img/3-5.bb214e70.png" />)

## 글꼴

글꼴의 경우 커스텀 글꼴이나 Google글꼴같은 다양한 글꼴을 사용할 수 있습니다.
글꼴 적용 방법은 두 단계로 수행 됩니다.

1. `pubspec.yaml`에 선언
2. `TextStyle` 속성에 글꼴 적용

### ASSET에 선언

```yaml
flutter:
    fonts:
        - family: Raleway
          fonts:
              - asset: assets/fonts/Raleway-Regular.ttf
              - asset: assets/fonts/Raleway-Medium.ttf
                weight: 500
              - asset: assets/fonts/Raleway-SemiBold.ttf
                weight: 600
        - family: AbrilFatface
          fonts:
              - asset: assets/fonts/abrilfatface/AbrilFatface-Regular.ttf
```

### 글꼴 사용

```dart
// 텍스트 스타일 선언
const textStyle = const TextStyle(
  fontFamily: 'Raleway',
);

// 텍스트 스타일 사용
var buttonText = const Text(
  "Use the font for this text",
  style: textStyle,
);
```

### 패키지 글꼴

```dart
const textStyle = const TextStyle(
  fontFamily: 'Raleway',
  package: 'my_package', // 패키지명
);

```

```yaml
flutter:
    fonts:
        - family: Raleway
          fonts:
              - asset: assets/fonts/Raleway-Regular.ttf
              - asset: packages/my_package/fonts/Raleway-Medium.ttf
                weight: 500
```
