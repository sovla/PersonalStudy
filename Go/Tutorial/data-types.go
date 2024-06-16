package main

func dataTypes(){
	// Go 랭은 다음과 같은 데이터 타입을 지원한다.

	// bool
	var boolVariable bool = true

	// string : 한번 생성되면 수정될 수 없는 immutable 타입
	var stringVariable string = "Hello, World!"


	// 정수형 타입
	// int   범위 : -9223372036854775808 ~ 9223372036854775807
	// int8  범위 : -128 ~ 127
	// int16 범위 : -32768 ~ 32767
	// int32 범위 : -2147483648 ~ 2147483647
	// int64 범위 : -9223372036854775808 ~ 9223372036854775807
	// uint8 uint16 uint32 uint64 : 부호가 없는 정수형 0부터 시작되어 음수를 표현하지 않는다.
	// uint , int , uintptr : 시스템의 비트에 따라 정수형의 크기가 결정된다. 
	// uintptr 보충 설명 : uint와 크기가 동일하며 포인터를 저장할때 사용 -> 
	var intVariable int = 10

	// 실수형 타입
	// float32 : 32비트 부동소수점 수
	// float64 : 64비트 부동소수점 수
	// complex64 : 32비트 실수부와 32비트 허수부로 구성
	// complex128 : 64비트 실수부와 64비트 허수부로 구성
	var float32Variable float32 = 11.0

	// 기타 타입
	// byte : uint8과 동일하며 바이트 코드를 나타낼때 사용
	// rune : int32와 동일하며 유니코드 코드 포인트를 나타낼때 사용


	// 문자열 리터럴은 백틱과 큰 따옴표를 사용할 수 있다.
	// 백틱의 경우 Raw String 값 그대로 처리, 여러줄 표헌 가능, 이스케이프 문자 무시
	// 큰 따옴표의 경우 Interpreted String 값으로 처리, 한줄만 표현 가능, 이스케이프 문자 처리 가능
	rawLiteral := `아리랑\n
	아리랑\n
	  아라리요`
	 
	// Interpreted String Literal
	interLiteral := "아리랑아리랑\n아리리요"
	// 아래와 같이 +를 사용하여 두 라인에 걸쳐 사용할 수도 있다.
	// interLiteral := "아리랑아리랑\n" + 
	//                 "아리리요"   
	


	// -------------------
	// 데이터 타입 변환
	// -------------------
	// Go는 데이터 타입 변환시 명시적으로 변환해야 한다.
	// type(value) 형태로 변환한다.

	// int to float
	var intToFloat float64 = float64(intVariable)

	// float to int
	var floatToInt int = int(float32Variable)

	// int to string
	var intToString string = string(intVariable)

	// string to bytes
	var stringToBytes []byte = []byte(stringVariable)
	
	// bytes to string
	var byteToString string = string(stringToBytes)


}