package main

// function 기본

// 키워드는 func
// 구조 : func 함수명(매개변수) 리턴타입 { 함수내용 }
func functionExample(msg string) string {
	println(msg)
	return msg
}


func main() {
	// 파라미터 전달 방법
	var i,j int = 1,2

	// 1: 값에 의한 전달
	passByValue(i);
	println(i) // 1
	
	// 2: 참조에 의한 전달
	passByReference(&j);
	println(j) // 10
}
func passByValue(val int) {
	// 값만 전달하였기에 원본 값은 변하지 않는다.
	val = 10
	
}

func passByReference(val *int) {
	// 주소값을 전달하였기에 원본 값이 변한다.
	*val = 10
}

// 가변인자 함수
func sum(nums ...int) int {
	total := 0
	for _, num := range nums {
		total += num
	}
	return total
}

// 함수 리턴값
func sumAndProduct(a,b int) (int,int) {
	return a+b, a*b
}

// Named Return Parameter
func sumAndProduct2(a,b int) (sum int, product int) {
	sum = a+b
	product = a*b
	return
}

func test(){
	var sumResult, productResult = sumAndProduct(2,3)
	println(sumResult, productResult) // 5, 6

	var sum, product int = sumAndProduct2(2,3)
	println(sum, product) // 5, 6
}



// 익명함수

func anonymousFunction() {
	sum := func(n ...int) int {
		s := 0
		for _, i:= range n {
			s += i
		}
		return s
	}
	result := sum(1,2,3,4,5)
	println(result) // 15
}

// 일급 함수
func firstClassFunction() {
	// 함수를 변수에 대입
	add := func(a,b int) int {
		return a+b
	}
	
	// 함수를 매개변수로 전달
	result := operate(add, 10, 20)
	println(result) // 30
}

func operate(f func(int,int) int, a,b int) int {
	return f(a,b)
}

// 타입문을 사용한 함수 정의
type calculator func(int,int) int
func calc(f calculator,a int , b int) int {
	return f(a,b)
}