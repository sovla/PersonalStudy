## VPC
- Virtual Private Cloud는 사용자의 AWS 계정 전용 가상 네트워크
- 다른 가상 네트워크와 논리적으로 분리되어 있음
- 완전한 네트워크 제어 가능
	- IP 범위(CIDR)
	- Subnet
	- Route table
	- Network ACL, 보안그룹
	- 다양한 게이트웨이
- VPC 내의 모든 EC2 인스턴스들은 사설 IP가 부여됨
- 개별 인스턴스에 공인 IP 할당 가능(Public IP/ Elastic IP)
![[Pasted image 20231109092454.png]]

### 사설 IP 

### IP 주소 지정
- 사설 IP 대역(RFC 1918참고) 사용 권고
- 주 주소 범위(CIDR block)은 생성 후 변경 불가
	- 보조 CIDR은 생성/제거 가능
- 생성 가능한 CIDR 블록 범위는 /28(16) ~ 16 (65,536)
- 향후 직접 연결할 가능성이 있는 네트워크 주소와 중복되지 않도록 할당


#### CIDR은?
Classless Inter-Domain Routing은 인터넷상의 데이터 라우팅 효율성을 향상 시키는 IP 주소할당 방법입니다.

- 기존의 클래스 기반 주소 개념
	- 클래스 A(10.0.0.0/8) 호스트 주소 10.0.0.1
	- 클래스 B(172.16.0.0/16) 호스트 주소 172.16.0.2
	- 클래스 C(192.168.0.0(24) 호스트 주소 192.168.0.100
	- 서브넷 마스크가 지정되어 있는 클래스를 미리 정해놓고 사용
- 클래스 없는 주소(CIDR)
	- 서브넷 마스킹(/24,/26)을 이용해 IP주소의 네트워크와 주소 비트간의 비율을 지정합니다.
	- 서브넷 마스크는 호스트 주소를 0으로 변환해 IP주소의 네트워크 주소값을 반환하는 식별자 집합입니다. 
		- 예를들어 IP주소 192.168.1.25 이고 서브넷 마스크가 255.255.255.0 인 경우 서브넷 마스크는 255.255.255.0 = 11111111.11111111.11111111.00000000 으로 표현 되는데 이때 1로 표시된 부분이 네트워크 주소 부분이고, 0으로 표시된 부분이 호스트 주소 부분이다. 따라서 네트워크 주소는 192.168.1.0이 됩니다. 
	- 

CIDR이 기존 클래스 기반보다 좋은점은?
- 서브넷 마스킹을 통해 유연한 네트워킹 구성 가능
- 기존 클래스 기반은 클래스에 따라 네트워크를 결합하는 기능이 제한되어 있어 설계에 제한이 있음
### Subnet
- Define Subnet ranges within the VPC CIDR block by region
- Subnet Ranges are typically recommended to be /24(256) or larger.
- Five addresses(first 4, last 1) are reserved and cannot be used
- Subnet address range changes are not allowed after subnet creation

### Routing Table
- Configured at the subnet level
- A set of rules that determine the direction of network traffic
- Specifies Destination And Target 
- By default, all subnets created within the VPC communicate with each other via the local router
- Additional routing rules are required for other scenarios,
  e.g., internet, intranet VPN, and dedicated connnections
  - if a subnet is not explicitly assigned a separate routing table, it will be associated with the main routing table

#### DMZ(AWS/PublicSubnet)
인터넷 -> 방화벽 -> 사내망 -> ERP 연결이 있을때
특정 웹서버를 위해 열어놓은 환경을 DMZ이라고 표현한다 

### Basic Configuration of VPC : Traffic Control
- Network ACL
	- Configured at the Subnet level
	- Uses Allow/Deny rules
	- Requires explicit allowance for response traffice
- Security Group
	- Configured at the instance level.
	- Uses Allow rules.
	- Automatically allows response traffic


## Various gateway services
### Internet Gateway
- Assists communication between VPC and the internet
- Provides destinations in the VPC routing table for traffic that is routable to the internet
- Performs network address translation.
### NAT Gateway

- Performs tasks such as installing, patching, and updating lib for instances located in private subnets
- Requires one Elastic IP for internet communication per NAT gateway
==인터넷게이트웨이 없이 넷게이트웨이만으로 외부 연결은 불가한가?

![[Pasted image 20231109105037.png]]

### Methods of Connecting VPCs - 1: Internet GateWay
Connects  between VPCs via internet connectivity.
- Incurs additional costs for outbound traffic
![[Pasted image 20231112222309.png]]
### Methods of Connecting VPCs - 2: VPC Peering
- Fully Isolated Dedicated Connection Between VPCs:
	- Dedicated connection between VPCs in different regions,accounts
- Only Single Peering Allowed Between VPCs, IP Addresses Must Not Overlap
- VPC Peering is a 1:1 relationship
- Traffic must originate/terminate from the network interfaces within the connected VPCs
- Does not support transit configurations



![[Pasted image 20231112223255.png|단일 VPC Peering]]

![[Pasted image 20231112224326.png|다중 VPC Peering]]




### Methods of Connecting VPCs - 3 : AWS Transit Gateway
- Easily and freely connect numerous VPCs.
- Seamlessly integrate branch/office networks with simplicity.
- Various configurations leveraging routing domains.
- Primarily used when connecting to on-premise environments, incurring separate connection costs from VPC Peering.


## Additional Network-Related Services
### VPC Endpoooint
- Using AWS services without going through the internet
- Dedicated connection between VPC and its resources(No need for NAT or IGW)



## 실습 VPC

### create VPC
- Your VPC -> Create VPC
- Options
	- VPC Only
	- CIDR 10.0.0.0/16 (10.0.0.0~10.0.255.255)

### create Subnet
- [subnet Create][https://ap-northeast-2.console.aws.amazon.com/vpcconsole/home?region=ap-northeast-2#CreateSubnet:]
- subnet name : (private|public)-(subnet)-(AZ)

### create InternetGateWay
- [internetGateWays Dashboard][https://ap-northeast-2.console.aws.amazon.com/vpcconsole/home?region=ap-northeast-2#igws:]
- Create GateWay
### create RouteTable
- 


### 보안
