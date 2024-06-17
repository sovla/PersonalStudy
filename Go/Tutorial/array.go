// go Array는 제로베이스 배열이다.

package main
func main() {
	// int 최대 3개의 배열을 선언한다.
	var array [3]int
	array[0] = 1
	array[1] = 2
	array[2] = 3
	println(array[0])


	// 배열 초기화
	var array2 = [3]int{1,2,3}
	var array3 = [...]int{1,2,3}
	println(len(array2)) // 3
	println(len(array3)) // 3

	// 다차원 배열
	var multiArray [3][4]int
	multiArray[0][1] = 10
	println(multiArray[0][1]) // 10 

	// 다차원 배열 초기화
	var multiArray2 = [3][4]int{
		{1,2,3,4},
		{5,6,7,8},
		{9,10,11,12},
	}
	println(len(multiArray2)) // 3
	println(len(multiArray2[0])) // 4


	// go slice 
	// GO 배열은 고정된 배열크기 안에 동일한 타입의 요소를 연속적으로 저장하지만,
	// 배열의 크기를 동적으로 증가시키거나 부분 배열을 발췌하는 등의 기능을 가지고 있지 않다.
	var a []int        // 슬라이스 변수 선언
    a = []int{1, 2, 3} // 슬라이스에 리터럴값 지정
    a[1] = 10

	// make 함수 : 슬라이스를 생성하고 초기화	
	s := make([]int,5,10)
	println(len(s), cap(s)) // 5, 10 cap은 내부 최대길이
	
	var s2 [] int
	if s== nil{
		println("Nil Slice")
	}
	println(len(s2), cap(s2)) // 0, 0

    
	// 부분 슬라이스
	s3 := []int(0,1,2,3,4,5)
	s4 := s3[2:5] // 2,3,4
	// [3:] 3부터 끝까지
	// [:5] 처음부터 5까지
	s5 := s3[3:] // 3,4,5

	// append, copy
	s = append(s, 6,7)
	println(len(s), cap(s)) // 7, 10

	source := []int{0, 1, 2}
    target := make([]int, len(source), cap(source)*2)
    copy(target, source)
    println(target)  // [0 1 2 ] 출력
    println(len(target), cap(target)) // 3, 6 출력


}