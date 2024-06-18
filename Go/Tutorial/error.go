// Go 는 내장타입으로 error라는 interface 타입을 갖는다
package main

import (
	"log"
	"os"
)


type error interface {
	Error() string
}

 

 
func main() {
    f, err := os.Open("C:\\temp\\1.txt")
    if err != nil {
        log.Fatal(err.Error())
    }
    println(f.Name())
}