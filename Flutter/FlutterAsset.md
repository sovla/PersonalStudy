# 개요
플러터 개발을 하며 Assets에 접근해야될 많은 경우가 있엇다.
이러한 점을 정리 해두지 않는다면 다음에 또 검색할 것 같아 예방 차~ 정리 해둡니다.
## assets 추가 방법
assets에 등록할 파일은 크게 두가지가 있습니다.
font,image 이다 이 둘중 `image`를 먼저 관리하는 방법을 알려주겠습니다.

- lib폴더와 동일한 위치에 assets폴더를 생성
- yaml에 assets: - assets/원하는 폴더를 지정 
- 만약 - assets/ 이렇게 선언하면 아래 전체 폴더 지정 가능 
- 플러터 앱에서 assets을 불러오는 시점은 사용하는 시점기준(cache로 불러오기에 속도가 매우빠름)

![](https://velog.velcdn.com/images/gavri/post/411929b8-dab2-4269-8446-8b793cf52a11/image.png)

`font`의 경우 family 를 통해 폰트 파일을 분별하며,weight별 폰트를 따로 지정이 가능합니다.
여기서 주의 할점 
- Flutter web의 경우 폰트를 초기에 병렬로 받아오지만 무거운 폰트가 있을경우 안그래도 느린 flutter Web이 더 느려지는 최악을 맛볼 수 있습니다.
- 위 문제를 해결 하기 위해선 assets에 assets/font/pdf/ 를 지정해 assets내에 접근 가능하도록 하고 사용할 시점에 무거운 폰트를 로드하도록 하는게 좋습니다.
![](https://velog.velcdn.com/images/gavri/post/07bbcb85-1b65-4361-bd5e-8a193b102a3a/image.png)

```yaml


assets:
    - assets/images/
    - assets/lottie/
    - assets/mp4/
    - assets/font/pdf/
fonts:
    - family: noto
      fonts:
        - asset: assets/font/NotoSansKR-Regular.otf
          weight: 400
        - asset: assets/font/NotoSansKR-Medium.otf
          weight: 500
        - asset: assets/font/NotoSansKR-Bold.otf
          weight: 700
    - family: yeonsung
      fonts:
        - asset: assets/font/yeon-sung-v20-latin_korean-regular.ttf
          weight: 400
    - family: fixed
      fonts:
        - asset: assets/font/NotoSansMono-Regular.ttf
          weight: 400
    - family: YPetIcons
      fonts:
        - asset: assets/font/YPetIcons.ttf

```
## assets 불러오는 방식
### 이미지 불러오기
```dart
Image.asset("assets전체 경로");
```
### 폰트 불러오기
```dart
textStyle ??= const TextStyle(
    fontFamily: 'noto',
    fontWeight: FontWeight.normal,
    fontSize: 16,
    letterSpacing: -0.05,
    color: Color(0xff111111),
  );
```
### 폰트 동적 불러오기
```dart
var fontLoader = FontLoader("nanum");

  fontLoader.addFont(fetchFont().then((value) => value!)); 
  // fetchFont는 cdn을 통해 받아온 font에서 response.bodyBytes.buffer 이다 
  // 만약 assets에서 동적으로 불러올려면
  // await rootBundle("assets/font/font.ttf").buffer 이부분을 fetchFont에 적어주면 됩니다.

  fontLoader.load();
```
### 에셋 전체 리스트 불러오기
```dart
	var jsonAssetManifest = await rootBundle.loadString("AssetManifest.json");
    var assetManifest = jsonDecode(jsonAssetManifest);
   // {
   //	"assets/image/1.png":["assets/image1.png"],
	//	"assets/image/1.png":["assets/image2.png"]}
    
    
```
