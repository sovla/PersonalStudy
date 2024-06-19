package main

import (
	"bytes"
	"encoding/json"
	"encoding/xml"
	"fmt"
	"io"
	"net/http"
	"net/url"
)

func main(){
	
	// getMethod("https://naver.com")
	// requestWithGetCall()
	// postCall()
	// postCallWithBody()
	postCallWithJsonAndXml()
}


func getMethod(url string){
	resp, err := http.Get("https://naver.com")

	if err != nil {
		panic(err)
	}

	defer resp.Body.Close()

	// 결과 출력
	data,err := io.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}

	fmt.Printf("%s",data)

}

func requestWithGetCall(){
	// Request 객체 생성
    req, err := http.NewRequest("GET", "http://csharp.tips/feed/rss", nil)
    if err != nil {
        panic(err)
    }
 
    //필요시 헤더 추가 가능
    req.Header.Add("User-Agent", "Crawler")
 
    // Client객체에서 Request 실행
    client := &http.Client{}
    resp, err := client.Do(req)
    if err != nil {
        panic(err)
    }
    defer resp.Body.Close()
 
    // 결과 출력
    bytes, _ := io.ReadAll(resp.Body)
    str := string(bytes) //바이트를 문자열로
    fmt.Println(str)
}

func postCall(){

	reqBody := bytes.NewBufferString(("Post Data"))
	resp,err := http.Post("http://httpbin.org/post", "text/plain", reqBody)
	if err != nil {
        panic(err)
    }
 
    defer resp.Body.Close()
 
    // Response 체크.
    respBody, err := io.ReadAll(resp.Body)
    if err == nil {
        str := string(respBody)
        println(str)
    }
}

func postCallWithBody(){
	resp, err := http.PostForm("http://httpbin.org/post", url.Values{"Name": {"Lee"}, "Age": {"10"}})
    if err != nil {
        panic(err)
    }
 
    defer resp.Body.Close()
 
    // Response 체크.
    respBody, err := io.ReadAll(resp.Body)
    if err == nil {
        str := string(respBody)
        println(str)
    }
}

type Person struct {
	Name string
	Age  int
}
func postCallWithJsonAndXml(){
	person := Person{"Alex", 10}
    pbytes, _ := json.Marshal(person)
    buff := bytes.NewBuffer(pbytes)
    resp, err := http.Post("http://httpbin.org/post", "application/json", buff)

	if err != nil {
		println("error")
		panic(err)
	}
	fmt.Println(resp.StatusCode)
	respBody,err := io.ReadAll(resp.Body)
	if err != nil {
		panic(err)
	}
	fmt.Println(string(respBody))


	// xml

	person1 := Person{"Alex", 10}
    pbytes1, _ := xml.Marshal(person1)  // xml marshal
    buff1 := bytes.NewBuffer(pbytes1)
    resp1, err := http.Post("http://httpbin.org/post", "application/xml", buff1)
}