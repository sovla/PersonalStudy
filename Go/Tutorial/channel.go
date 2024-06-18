// Go channel
// Go 채널은 고루틴 간의 통신을 위한 기능이다.
// 채널은 make 함수를 사용해 생성한다.
// 채널 연산자 <- 를 통해 통신을 하며 흔히 고루틴 사이에 데이터를 통신하는데 사용됨

// 정수형 채널 예제

package main

import "fmt"

func main() {
	ch := make(chan int)
	ch1 := make(chan int)

	go func () {
		ch <- 123

		ch1 <- 124
		// 수신대기
	}()

	var i int
	i = <- ch
	println(i)
	println(<-ch1)
	// println(<-ch1) //fatal error: all goroutines are asleep - deadlock!


	// 채널 버퍼링
	// Unbuffered channel
	// 채널에 버퍼를 지정하지 않으면 버퍼가 0인 채널이 된다.
	// 즉, 송신자와 수신자가 동시에 준비되어야 한다.
	// 버퍼링된 채널
	// 채널에 버퍼를 지정하면 해당 버퍼만큼 송신자가 데이터를 보낼 수 있다.
	// 버퍼가 가득차면 송신자는 대기하게 된다.


	// make(chan type, buffer size)
	unBufferedChannel := make(chan int)
	bufferedChannel := make(chan int, 2)

	
	// unBufferedChannel <- 1 // 수신 채널이 없어 데드락
	// fmt.Println(<-unBufferedChannel) // 코멘트해도 데드락

	bufferedChannel <- 1
	fmt.Println(<-bufferedChannel)
	fmt.Println(unBufferedChannel) 




	channel := make(chan string, 1)
	sendChan(channel)
	receiveChan(channel)
	

	// 채널닫기
	close(channel)

 

}
func sendChan(ch chan<- string) {
    ch <- "Data"
    // x := <-ch // 에러발생
}
 
func receiveChan(ch <-chan string) {
    data := <-ch
    fmt.Println(data)
}

// channel range 문 예제 -----------------------------------------------------------

// package main
 
// func main() {
//     ch := make(chan int, 2)
 
//     // 채널에 송신
//     ch <- 1
//     ch <- 2
 
//     // 채널을 닫는다
//     close(ch)
 
//     // 방법1
//     // 채널이 닫힌 것을 감지할 때까지 계속 수신
//     /*
//     for {
//         if i, success := <-ch; success {
//             println(i)
//         } else {
//             break
//         }
//     }
//     */
 
//     // 방법2
//     // 위 표현과 동일한 채널 range 문
//     for i := range ch {
//         println(i)
//     }
// }

// select channel 예제 -----------------------------------------------------------

// package main
 
// import "time"
 
// func main() {
//     done1 := make(chan bool)
//     done2 := make(chan bool)
 
//     go run1(done1)
//     go run2(done2)
 
// EXIT:
//     for {
//         select {
//         case <-done1:
//             println("run1 완료")
 
//         case <-done2:
//             println("run2 완료")
//             break EXIT
//         }
//     }
// }
 
// func run1(done chan bool) {
//     time.Sleep(1 * time.Second)
//     done <- true
// }
 
// func run2(done chan bool) {
//     time.Sleep(2 * time.Second)
//     done <- true
// }