# 패키지 관리

## 소개

Flutter 패키지 관리를 알아 보기 위해선 pubspec.yaml 파일을 보면 됩니다. 아래에 추가 설명을 하도록 하겠습니다

```yaml
name: flutter_in_action
// 앱 이름 또는 패키지 명
description: First Flutter Application.
// 앱 또는 패키지 설명


version: 1.0.0+1
// 앱 또는 패키지 버전

dependencies:
// 의존하는 패키지 또는 플러그인
  flutter:
    sdk: flutter
  cupertino_icons: ^0.1.2

dev_dependencies:
// 개발 환경이 의존하는 패키지 또는 플러그인 (개발용)
  flutter_test:
    sdk: flutter

flutter:
// Flutter 관련 구성 옵션
  uses-material-design: true
```

## 공개 저장소

Pub는 Android jcenter 또는 Node의 npm 저장소와 유사한 **Google 공식 Dart 패키지 저장소** 입니다.

### 예 english_words

<img src="https://book.flutterchina.club/assets/img/2-12.b12dec81.png" />
"english_words" 패키지의 최신 버전은 4.0.0이고 flutter를 지원합니다 해당 라이브러리를 pubspec.yaml에 추가하는 방법입니다.

```yaml
dependencies:
    flutter:
        sdk: flutter
    english_words: ^4.0.0  // ^ 표시는 4.0.0 <= 최신 version
```

### 기타 종속성

-   로컬 패키지 패키지명 pkg1

```yaml
dependencies:
	pkg1:
        path: ../../code/pkg1
```

-   Git 의존성

```yaml
dependencies:
  pkg1:
    git:
      url: git://github.com/xxx/pkg1.git

/// 루트 디렉토리에 없는 경우(별도로 지정해야 되는 경우)
dependencies:
  package1:
    git:
      url: git://github.com/flutter/packages.git
      path: packages/package1
```
