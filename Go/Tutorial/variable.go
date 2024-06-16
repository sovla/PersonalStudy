package main

func variables() {

	// 선언만
	var intVariable int 

	// 선언 할당
	var float32Variable float32 = 11.


	// 할당
	intVariable = 10

	// 재할당
	float32Variable = 10.0

	// 복수 선언,할당
	var i,j,k int = 1,2,3 

	// 타입 추론 지원
	var s = "Hello, World!"

	

	/*--------------------
			 상수 
	-------------------- */

	const PI float32 = 3.14

	const S string = "Hello, World!"

	// 복수 상수
	const (
		Visa = "Visa"
		Master = "MasterCard"
		Amex = "American Express"
	)

	// increment
	const (
		Apple = iota // 0
		Grape // 1
		Orange // 2
	)

	// 상수에서 특정 단위 건너뛰기
	const (
		SUN = iota // 0
		_ // blank identifier 로 스킵
		TUE // 2
		WED // 3
	)
}