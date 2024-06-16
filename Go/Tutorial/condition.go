package main

func condition() {
	// if 3가지 버전에 대해 설명

	// 1. 괄호가 없는 간단 버전
	if true {
		println("This is true")
	}

	// 2. 일반적인 버전
	if (true) {
		println("This is true")
	} else {
		println("This is false")
	}

	// 3. optional statement
	var i,max int = 1, 10
	if val := i * 2;  val < max {
		// 조건은 val < max 이고 
		// val이라는 변수는 if 문에서만 사용 가능하다.
		println("This is true")
	}
	val // error : undefined: val


	// switch

	var name string
	var category = 3
	switch category {
	case 1:
		name = "One"
	case 2:
		name = "Two"
	default:
		name = "Unknown"
	}

	// switch with expression
	switch x := category << 2; x {
	case 1:
		name = "One"
	case 2:
		name = "Two"
	default:
		name = "Unknown"
	}

	// without expression
	switch{
	case category == 1:
		name = "One"
	case category == 2:
		name = "Two"
	default:
		name = "Unknown"
	}

	// type check switch
	var x interface{}
	switch x.(type) {
	case int:
		println("int")
	case bool:
		println("bool")
	case string:
		println("string")
	default:
		println("unknown")
	}

	// fallthrough
	// go는 기본적으로 break가 포함되어 있다. 
	// fallthrough를 사용하면 다음 case로 넘어간다.

	switch category {
	case 1:
		name = "One"
		fallthrough
	case 2:
		name = "Two"
		fallthrough
	default:
		name = "Unknown"
	}



}