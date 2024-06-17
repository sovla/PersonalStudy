package main
func nextValue() func() int {
	i := 0
	return func() int {
		i++
		return i
	}
}

func main() {
	next := nextValue()
	
	println(next()) // 1
	println(next()) // 2
	println(next()) // 3
	// next 새로 선언 시 i는 초기화 되어 1부터 시작한다
	// next = nextValue()
	// println(next()) // 1
	// println(next()) // 2

	anotherNext := nextValue()
	println(anotherNext()) // 1
	println(anotherNext()) // 2
}