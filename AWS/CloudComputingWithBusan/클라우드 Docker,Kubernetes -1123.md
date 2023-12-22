
# Kubernates 개요

## 개요
- Container Orchestration Tool
- 즉, 여러대의 서버에 여러 개의 Container를 관리하는 툴
- 주요 기능
	- 여러 호스트를 묶어 클러스터를 구성
	- container를 적절한 위치에 배포(auto-placement)/ master scheduler가 하는 일
	- container가 죽으면 자동 복구(auto-restart)
	- 필요에 따라 container를 추가,복제,업데이트,롤백등 지원
	- [쿠버네티스 기능 공식문서][https://kubernetes.io/docs/concepts/]
## 아키텍쳐
- master,slave 두 개념으로 나뉨
- master
	- 작업을 위한 api server
	- state를 관리하기 위한 분산 저장소?
	- scheduler,controller manager 등이 있음
	- 현재 마스터는 단일 노드지만 추후 멀티 노드 마스터가 지원될 예정
- slave node 구성 요소
	- master와 통신하는 kubelet
	- 외부의 요청을 처리하는 kube-proxy
	- 리소스 모니터링을 위한 cAdviser 등이 존재

### Control Plain Component
- 클러스터에 관한 전반적인 결정을 수행하고 클러스터 이벤트를 감지하고 반응
- 클러스터 내 모든 머신에서 동작할 수 있으나 간결성을 위해 구성 스크립트는 보통 동일 머신 상에 동작시키지 않음
![[Pasted image 20231123092345.png]]

### kube-apiserver
- API 서버는 Kubernetes API를 노출하는 Kubernetes Control Plain Component
- 수평 확장 되도록 디자인 됨
- 여러 kube-apiserver 인스턴스를 실행하고 인스턴간의 트래픽을 균형 있게 조절할 수 있음
### etcd
- k8s에서 모든 데이터를 저장하고 있음
- 일관성-고가용성, 키-값 저장소(NoSQL)
- etcd 를 뒷단의 저장소로 사용한다면 이 데이터를 백업하는 계획은 필수

### kube-scheduler
- Node 가 배정되지 않은 새로 생성된 Pod 를 감지하고 실행할 Node 를 선택하는 Control Plain Component Scheduling 결정을 위해서 고려되는 요소는 리소스에 대한 개별 및 총체적 요구 사항, 하드웨어/소프트웨어/정책적 제약, 어피니티(affinity) 및 안티-어피니티(anti-affinity) 명세, 데이터 지역성, 워크로드가 간섭, 데드라인을 포함


## kubernetes 사용
### 컨테이너 런타임
### Pod
- k8s에서 배포할 수 있는 가장 작은 단위
- 한 개 이상의 컨테이너,스토리지,네트워크 속성을 가짐
- Pod에 속한 컨테이너는 스토리지,네트워크 공유 가능
- 컨테이너를 하나만 사용하는 경우에도 Pod로 감싸서 관리
![[Pasted image 20231123100459.png|Pod예시 이미지]]

### k8s Service
- 네트워크와 관련된 리소스
- Pod를 외부와 연결해주고 여러 개의 Pod를 바라보는 내부 로드밸런서를 생성할 때 사용
- 내부 DNS에 서비스 이름을 도메인으로 등록하기 때문에 서비스 디스커버리 역할도함
![[Pasted image 20231123100705.png|Service 구조]]

### ReplicaSet
- Pod를 여러 개 복제, 관리하는 리소스
- 복제할 개수, 개수를 체크할 라벨 선택자, 생성할 Pod 의 설정값(템플릿) 등 메타 데이터를 가지고 있음
- Deployment등 다른 리소스에 의해서 수정이나 롤백 되는 경우가 많음
![[Pasted image 20231123101155.png]]
![[Pasted image 20231123101209.png|k8s실행도]]

### Deployment
- Pod와 Replicaset에 대한 선언적 업데이트를 제공
- Deployment : 의도한 상태를 설명
- Deployment Controller : 현재 상태에서 의도하는 상태로 비율을 조정하며 변경
![[Pasted image 20231123101352.png]]


# ECS
## AWS 컨테이너 서비스 개요
- 오케스트레이션
	- ECS
	- EKS
- 실행환경
	- Fargate
	- EC2
- 이미지 레지스트리
	- ECR(Elastic Container Registry)
## ECS의 기본
- Linux/Windows 지원
- 기본 AMI  :Amazon ECS-optimized AMI 
	- 컨테이너 인스턴스에 요구되는 요구 사항/ 권장 사항에 따라 사전 구성된 AMI
	- Docker 데몬, ECS 컨테이너 에이전드 등 기본 설치됨
- 기본 개념
	- 태스크 
		- 태스크 정의에 따라 실행되는 응용프로그램의 실제 행 단위
		- 
		- 형식 : JSON
		- 컨테이너 정의(이미지 장소 등)
		- 성능에 대한 정보
		- 태스크에 할당하는 IAM 룰
		- 네트워크 모드 등..
	- 서비스
		- 작업 실행 복사 수 정의
		- 부팅 후 작업 실행 복사 수 유지
		- ELB와 연계
		- 기동 타입(EC2, Fargate) 설정
	- 클러스터
		- 실행 환경의 경계
		- IAM 권한 경계(클러스터 조작에 대한)
		- 스케쥴된 태스크 실행 설정 가능
- 실행 환경
	- ECS 컨테이너 에이전트를 실행하여 클러스터에 등록되어 있는 EC2 인스턴스
- ECS 컨테이너 에이전트 
	- ECS 컨트롤 플레인과 통신하고 컨테이너 인스턴스의 관리 및 작업 실행/정지 


## ECS 기능 소개 - 작업 정의 상세
## ECS 기능 소개 - 컨테이너 실행


# ECS 실습

- Cloud 9 생성
- [실습가이드][https://docs.aws.amazon.com/AmazonECS/latest/developerguide/create-container-image.html] 따라 실습 진행
- aws ecr create-repository --repository-name `c7-hello-repository` --region `ap-northeast-2`
- docker tag hello-world `aws_account_id`.dkr.ecr.`region`.amazonaws.com/`hello-repository`