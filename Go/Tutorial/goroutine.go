// 고루틴
// 고 런타임을 관리하는 논리적 쓰레드
// asynchronously 함수루틴을 실행하는데 사용하고, concurrently 동시에 실행하는데 사용한다.

// 주요특징 :
// - OS 쓰레드보다 가볍게 비동기 처리를 하기 위해 만들어졌음
// - 고 런타임에서 자체 관리
// - OS 쓰레드가 1개여도 다중으로 고루틴 실행 가능
// - 고루틴은 채널을 통해 통신한다.

package main

import (
	"fmt"
	"runtime"
	"sync"
	"time"
)

func say(s string){
	for i:= 0; i<10;i++{
		fmt.Println(s,"***",i)
	}
}


func main(){
	say("Sync")

	go say("Async1")
	go say("Async2")
	go say("Async3")

	// 2초 대기
	time.Sleep(time.Second * 2)


	// 익명함수

	// WaitGroup 생성. 2개의 Go루틴을 기다림.
	var wait sync.WaitGroup
	wait.Add(2)

	// 익명함수를 사용한 goroutine
	go func() {
	// Done을 호출하지 않으면 fatal error: all goroutines are asleep - deadlock!
		defer wait.Done() //끝나면 .Done() 호출
		fmt.Println("Hello")
	}()

	// 익명함수에 파라미터 전달
	go func(msg string) {
		defer wait.Done() //끝나면 .Done() 호출
		fmt.Println(msg)
	}("Hi")

	wait.Wait() //Go루틴 모두 끝날 때까지 대기

	// 다중 CPU 처리
	// Go 런타임은 기본적으로 하나의 CPU만 사용

	runtime.GOMAXPROCS(10)
	wait.Add(100)
	for i:=0;i<100;i++{
		
		go say("Async Test"+string(i))
	}
	wait.Wait()

}