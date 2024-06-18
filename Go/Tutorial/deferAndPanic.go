// defer
// finally 와 비슷한 기능 함수내에서 defer를 사용하면 함수가 종료되기 직전에 실행된다.

// panic
// 이 함수가 실행되면 함수의 실행이 즉시 종료되고, 현재 함수의 defer 함수들을 실행한 후 리턴한다.

// recover
// panic 함수에 의해 발생한 상황을 다시 정상 상태로 되돌리는 함수이다.

package main

import (
	"fmt"
	"os"
)

func main(){
	recoverExample()
	println("recover end")
	deferWithPanicExample()

}

func deferWithPanicExample()  {
	f, err := os.Open("1.txt") // 없는 파일
	if err != nil {
		panic((err))
	}

	defer f.Close()

	bytes := make([]byte,1024)
	f.Read(bytes)
	println(len(bytes))
	
}



func  recoverExample()  {
	// defer 함수. panic 호출시 실행됨
    defer func() {
        if r := recover(); r != nil {
            fmt.Println("OPEN ERROR", r)
        }
    }()
 
    f, err := os.Open("1.txt")
    if err != nil {
        panic(err)
    }
 
    defer f.Close()
}