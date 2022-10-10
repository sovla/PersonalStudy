# 자원관리

Flutter APP 설치 패키지에는 코드와 자산의 두 부분이 포함됩니다. 자산은 프로그램 설치 패키지로 패키징되며 런타임에 액세스할 수 있습니다. 일반적인 자산 유형에는 정적 데이터(예: JSON 파일), 구성 파일, 아이콘 및 이미지가 있습니다.

## 자산 지정

pubspec.yaml

```dart
flutter:
  assets:
    - assets/my_icon.png
    - assets/background.png
```

이미지등 자산의 경우 시스템 경로를 기준으로 고유한 경로를 통해 식별합니다.

빌드하는 동안 Flutter는 asset bundle이라고 하는 특수 아카이브에 배치 합니다. 이 아카이브는 앱 런타임에 읽을 수 있지만 수정할 수는 없습니다.

## 자산 변형

빌드 프로세스는 자산 변형의 개념을 지원합니다. 다른 컨텍스트에서 표시될 수 있는 자산의 다른 버전입니다. pubspec.yaml/assets에 지정되면 인접한 하위 디렉토리에서 동일한 이름을 가진 파일을 찾습니다.

```
.../pubspec.yaml
.../graphics/my_icon.png
.../graphics/background.png
.../graphics/dark/background.png
...etc.
```

```yaml
flutter:
    assets:
        - graphics/background.png
```

위의 경우 graphics/background.png , graphics/dark/background.png 둘 다 자산 번들에 포함됩니다. 전자는 주요 자산 으로 간주되고 후자는 변형 으로 간주됩니다.

```yaml
flutter:
    assets:
        - graphics/
```

위 처럼 적용할 경우 graphics 폴더 아래 모든 파일이 자산 번들에 포함 됩니다.

**Flutter는 해상도에 적합한 이미지를 선택할 때 자산 변형을 사용합니다. 앞으로 이 메커니즘은 다양한 로케일 또는 지역, 읽기 방향 등에 대한 변형을 포함하도록 확장될 수 있습니다.**

## 자산 로드

AssetBundle 앱은 개체를 통해 자산에 엑세스할 수 있습니다.

### 텍스트 로드

각 Flutter 앱에는 rootBundle 기본 자산 번들에 쉽게 액세스를 할 수 있는 개체가 있습니다. 루트번들을 활용해 자산을 직접 로드 할수 있으나
DefaultAssetBundle을 통해 접근하면 현지화 또는 테스트 시나리오를 적용한 자산에만 접근이 가능하도록 할 수 있습니다.

```dart
import 'package:flutter/services.dart' show rootBundle;

Future<String> loadAsset() async {
  return await rootBundle.loadString('assets/config.json');
}
// rootBundle

var bundle = DefaultAssetBundle.of(context);
bundle.loadString('asset/configure.json');
// DefaultAssetBundle 에서 context를 찾지 못할 경우 RootBundle을 이용한다
```

### 이미지 로드

플러터는 현재 장치 픽셀 비율에 적합한 해상도의 이미지를 로드할 수 있습니다.

<hr />
[AssetImage](https://api.flutter.dev/flutter/painting/AssetImage-class.html)을 이용하여 [현재 장치 픽셀 비율](https://api.flutter.dev/flutter/dart-ui/FlutterView/devicePixelRatio.html)
과 가장 근접하게 일치하는 자산에 매핑하는 방법을 소개하겠습니다.

```
// 디렉토리 구조
.../image.png
.../Mx/image.png
.../Nx/image.png
...etc.

// 예시 구조
.../my_icon.png
.../2.0x/my_icon.png
.../3.0x/my_icon.png
```

장치 픽셀 비율이 1.8 인 경우 2.0 폴더의 이미지를 2.7 인 경우 3.0 폴더의 이미지를 로드합니다. 만약 3.0x 파일을 불러와야 되는 상황에 해당 파일이 없다면 그 아래에 있는 이미지를 불러옵니다.

#### 이미지 로드 중

[ImageCache](https://api.flutter.dev/flutter/painting/ImageCache-class.html) : 이미지 캐시 관련 클래스
[ImageStream](https://api.flutter.dev/flutter/painting/ImageStream-class.html) : 이미지 리소스에 대한 핸들입니다. 로드되지 않은 경우 이미지를 미리 송출 하는 기능도 지원

### 패키지 종속성의 자산 이미지

패키지 종속성에서 이미지를 로드하려면 package 인수를 제공해야 합니다

```
.../pubspec.yaml
.../icons/heart.png
.../icons/1.5x/heart.png
.../icons/2.0x/heart.png
...etc.
```

이미지 로드 방법

```dart
    return const AssetImage('icons/heart.png', package: 'my_icons');
```

### 플랫폼별 자산

위의 리소스는 모두 Flutter 애플리케이션에 있습니다. 이 리소스는 Flutter 프레임워크가 실행된 후에만 사용할 수 있습니다. App 아이콘을 설정하거나 애플리케이션에 시작 이미지를 추가하려면 플랫폼별 자산을 사용해야 합니다.

#### 안드로이드

.../android/app/src/main/res 폴더를 통해 앱 아이콘 지정 및 스플래시 이미지 지정이 가능합니다.

![안드로이드 이미지](https://book.flutterchina.club/assets/img/2-15.89d0af83.png)

#### iOS

.../ios/Runner 폴더를 통해 앱 아이콘 지정 및 스플래시 이미지 지정이 가능합니다.
![안드로이드 이미지](https://book.flutterchina.club/assets/img/2-16.0a86cf44.png)

### 플랫폼 공유 자산

FLutter + 네이티브 개발 모드를 사용하면 리소스 공유가 되어야 할 상황이 있습니다. 이를 위해 플러터는 공유 리소스를 지원하고 있습니다.[플랫폼 공유 자산 공식 문서](https://flutter.cn/docs/development/ui/assets-and-images#sharing-assets-with-the-underlying-platform)
