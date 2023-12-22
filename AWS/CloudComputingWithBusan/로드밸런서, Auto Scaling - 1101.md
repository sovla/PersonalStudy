## 테라폼
- 클라우드 인프라스트럭처 자동화 프로그램

### 장점
- 자동화
- 속도 & 안전
- 문서화
- 형상관리
- 리뷰 및 테스트


--- 
# AWS Core - Management(ELB)
**ELB 권장사항**
- 최소 2개 설정 필요 & 3개 추천
## Elastic Load Balancer 개요
- 수신되는 애플리케이션 트래픽을 EC2로 분산 시켜주는 서비스(AWS 완전 관리형)
- 탄력적 운용이 가능해짐으로 인해 비용절감이 됨
- 보안 그룹 또한 AWS 내부 망에 연결이 가능해 보안성 이 좋아짐.
- AZ당 하나셋팅/ Route 53 -> ELB -> EC2 방향으로 트래픽이 유도됨

	네트워크 연결과정 a.Dev.com
	- Hosts 파일 도메인이 연결되어 있으면 해당 아이피로 이동
	- 없다면 DNS 서버를 통해 아이피 주소를 받아서 아이피로 이동
## Load Balancer 비교
![[Pasted image 20231116104557.png]]
### Classic Load Balancer
- AWS 초기 로드밸런서
- 유형 : ''
- 계층 4/7
- 프로토콜 : TCP, SSL/TLS, HTTP, HTTPS
- 지원 네트워크/플랫폼 : VPC,EC2-Classic
### Gateway Load Balencer
- 방화벽 용 로드 밸런서 그래서 계층이 (3,4)
- 계층 3+4
- 유형 : IP,인스턴스
- 프로토콜 : IP
- 지원 네트워크/플랫폼 : VPC
### Network Load Balencer
- 계층 4
- 유형 : IP, 인스턴스
- 프로토콜 : TCP,UDP,TLS
- 지원 네트워크/플랫폼 : VPC
- 고정 아이피 허용
### Application Load Balancer (L7)
- 계층 7
- 유형 : IP, 인스턴스, Lambda
- 프로토콜 : Http,Https,Grpc(구글에서 만든 프로토콜)
- 지원 네트워크/플랫폼 : VPC
- 고정 아이피 허용
## Application Load Balancer
개요
- L7 기반의 로드 밸런싱 플랫폼
- 완전 관리, 확장 가능, 고가용성
- Content 기반 라우팅을 통해 단일로드 밸런서 뒤에 있는 다른 애플리케이션으로 요청을 라우팅 가능
### single load balancer -> multiple application 호스팅 허용
![[Pasted image 20231116101410.png]]
![[Pasted image 20231116101505.png]]![[Pasted image 20231116101520.png

### 마이크로 서비스 및 컨테이너 기반 아키텍처에 대한 기본 지원을 제공
- ECS는 동적 포트 매핑을 사용하여 로드 밸런서에 작업을 자동으로 등록(다른 컨테이너 기술과 같이 사용가능)

![[Pasted image 20231116101707.png]]


### Target Group
- 로드 밸런서 뒤에 있는 대상의 논리적 그룹화(EC2그룹)
- TG는 로드 밸런서와 독립적으로 존재할 수 있으며 필요할 때 로드 밸런서와 연결
- AutoScaling 그룹과 연결할 수 있는 지역 구성
- Health Check를 통해 AutoScaling 지원
![[Pasted image 20231116101820.png]]

### Role
![[Pasted image 20231116102420.png]]

- 규칙에 의해 Target Group이 나뉠수 있음
- 리스너와 대상 그룹 간의 링크를 제공하고 조건과 작업으로 구성
- 요청이 규칙의 조건을 충족하면 관련 작업이 수행
- 오늘날 규칙은 요청을 지정된 대상 그룹으로 전달
- 경로 패턴 형식으로 조건을 지정


- 장점
	- 단일 TCP 연결을 통해 전이중 통신 채널을 지원하는 WebSocket에 대한 기본 지원
	- HTTP/2에 대한 지원은 오늘날 대부분의 브라우저에서 향상된 페이지로드 시간을 제공
	- 실시간 및 스트리밍 애플리케이션의 성능 향상


## 실습
