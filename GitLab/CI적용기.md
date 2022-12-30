# 개요

환경 : Flutter/Web , vultr server , GitLab
주 최소 1회 빌드 업무를 반복하며 최소 10분 이상 드는 빌드 업무를 없에고자 GitLab CI를 통해 버전 관리와 빌드 업무 자체를 푸시와 함께 진행하도록 설정 하였습니다.

## GitLab CI
GitLab CI 는 .gitlab-ci.yml 파일을 활용해 파이프라인 개념으로 진행 됩니다
> 파이프라인 이란 build-test-deploy-cleanup등 이어지는 작업들을 의미합니다.

직접 작성한 ci.yml파일 
```
stages:
  - build

build:
  stage: build # 빌드 단계
  image: "cirrusci/flutter:latest" # 사용할 도커 이미지
  before_script:
    - cd lib 
    - echo "$YPET_USER_LIVE" > setting_user.dart  # 변수를 통해 env파일처럼 gitignore에 추가한 파일 설정
    - cd ..
    - flutter pub global activate dart_code_metrics 
    - export PATH="$PATH:$HOME/.pub-cache/bin" 
  script: 
    - flutter build web --release # 빌드
    - cd build
    - mv web adminlive # 폴더명 변경
    # lftp를 통해 서버로 전송
    - lftp -c "set ftp:ssl-force true;set ssl:verify-certificate false;set sftp:auto-confirm yes;open -u snow,$YPET_FTP_PASSWORD sftp://$SERVER_HOST; cd www/adminlive; lcd adminlive; mirror -Rnc; bye" 
  only: 
    - live_build # live_build만 적용
```
### stages
파이프라인을 구성하는 방법
stages: 각 단계를 의미하며 위에서 아래로 순차적으로 진행됨 
각 동작에서 stage: value 를 통해 순서 지정이 가능
```yml
stages:
	- build # 
    - test
    - cleanup
    
build_a: # 이름
	stage: build # 스테이지 지정
    
test_a:
	stage: test

cleanup:
	stage: cleanup
```

### 도커이미지
image: "cirrusci/f₩lutter:latest" # 사용할 도커 이미지
도커 이미지는 https://hub.docker.com/ 사이트에서 필요한 언어, 버전에 해당하는 이미지를 활용하시면 됩니다.

### 변수
변수를 지정 하는 방식은 
- 프로젝트
- 각 파이프라인 실행전 지정 가능한 변수
- yml 파일내에서 변수 지정 

주로 프로젝트 자체에 변수를 지정해 사용했으며 지정 방법은 
GitLab-> 프로젝트 -> 설정 -> CI/CD -> Variable에서 지정해 사용 했습니다.

### 파일 생성 및 변수 사용
```yml
# Linux 에서 파일을 생성하는 방법중 touch cat ">" 이 있는데 그중 제일 간단해 보이는 꺽새를 활용해 파일을 생성했습니다. 
# 또한 변수를 사용해 해당 내용을 지정해두고 문자열로 불러오게 작업했습니다.
- echo "$YPET_USER_LIVE" > setting_user.dart 

# FTP나 비밀번호등 공개 되어서는 안되는 정보들을 변수로 관리해 보안에 신경을 썻습니다.
- lftp -c "set ftp:ssl-force true;set ssl:verify-certificate false;set sftp:auto-confirm yes;open -u snow,$YPET_FTP_PASSWORD sftp://$SERVER_HOST; cd www/adminlive; lcd adminlive; mirror -Rnc; bye" 
```

### lftp curl
두 라이브러리를 활용해 ftp 접속 그리고 curl를 통해 서버에 build가 되었다는 것을 전송하도록 설정하여 vultr 서버에 빌드된 파일 전송 및 Google Script 를 활용한 Google ChatAPI활용도 하였습니다.
```
- lftp -c "set ftp:ssl-force true;set ssl:verify-certificate false;set sftp:auto-confirm yes;open -u snow,$YPET_FTP_PASSWORD sftp://$SERVER_HOST; cd www/adminlive; lcd adminlive; mirror -Rnc; bye" 
- curl -X Get https://script.google.com/a/macros/ypet.co.kr/s/AKfycbzL9djEtFIMeFvg-ng4Jlz1d6tiYzF3mI3G2Hw3hzMOeAY0TphKVmvyaPvfCNrZHNs/exec?message= -H 'Content-Type: application/json' 
```

>앞으로 개선할 점 
1. build 스테이지에서 파일을 deploy 단계로 넘겨 stage를 분리시키는 것
2. GoogleChatBot에 다양한 파라미터 활용을 통해 개인에게 전송이 아닌 형식화된 메시지 관리

