// os package는 파일을 읽고 쓰는데 사용되는 함수를 제공한다.

package main

import (
	"io"
	"io/ioutil"
	"os"
)

func main() {
	filePath :="Go/Uses/1.txt"
	fi,err := os.Open(filePath)
	if err != nil {
		panic(err)
	}

	defer fi.Close()

	// 출력파일 생성
	fo,err := os.Create("Go/Uses/1.txt")
	if err != nil {
		panic(err)
	}
	buff := make([]byte,1024)

	for  {
		// 읽기
		cnt, err := fi.Read(buff)
		if err != nil && err != io.EOF {
			panic(err)
		}

		if cnt == 0 {
			break
		}

		// 쓰기
		_,err = fo.Write(buff[:cnt])
		if err != nil {
			panic(err)
		}
		
		
	}



	// i/o 관련한 유틸
	 //파일 읽기
	 bytes, err := ioutil.ReadFile("Go/Uses/1.txt")
	 if err != nil {
		 panic(err)
	 }
	 //파일 쓰기
	 err = ioutil.WriteFile("Go/Uses/2.txt", bytes, 0)
	 if err != nil {
		 panic(err)
	 }

}