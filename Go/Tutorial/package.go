package main
func main()  {
	// go는 패키지를 사용하여 코드를 구성한다.
	// 개발에 필요한 수많은 표준 패키지를 제공한다 참고 )) https://pkg.go.dev/std
	

	// 패키지 임포트
	// import "fmt" 처럼 사용한다.
	// 패키지 이름은 패키지의 소스 코드를 담고 있는 디렉토리 이름과 같다.

	 // 패키지 Scope
	 // 패키지 내에는 함수,구조체 ,인터페이스 메서드 등이 존재하는데 이름을 대문자로 시작하면 public이 된다.
	 // 소문자로 시작하면 패키지 내부에서만 사용 가능하다.

	 // 패키지 init 함수와 alias

	 // 아래와 같은 함수 형태로 패키지 로드시 자동으로 실행되는 함수를 init 함수라고 한다.
	 // func init() {
	 // 	println("Init")
	 // }

	 // alias
	 // import _ "fmt" 처럼 _를 alias를 지정한 얘이다 
	 // 패키지 이름이 동일하지만 서로 다른 버전 혹은 서로 다른 위치에서 로딩하고자 할때는 아래처럼 사용 할 수 있다.
	 // import (
	 // 	mongo "github.com/mongodb/mongo-go-driver/mongo"
	 // 	mysql "github.com/go-sql-driver/mysql"
	 // )http://golang.site/go/article/16-Go-%EA%B5%AC%EC%A1%B0%EC%B2%B4-struct



	 // 사용자 정의 패키지
	 // src/testlib/music.go 파일 생성후 아래와 같이 사용하면 된다.
	 // package testlib
	 // func Hello() {
	 // 	println("Hello")
	 // }

	 // src/testlib/main.go
	 // package main
	 // import "testlib"
	 // func main() {
	 // 	testlib.Hello()
	 // }
	 





	
}