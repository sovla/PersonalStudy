// go interface
// 인터페이스는 메서드 집합
package main

import "math"
type Shape interface {
	area() float64
	perimeter() float64
}

type Rect1 struct {
	width, height float64
}

type Circle struct {
	radius float64
}

//Rect 타입에 대한 Shape 인터페이스 구현 
func (r Rect1) area() float64 { return r.width * r.height }
func (r Rect1) perimeter() float64 {
     return 2 * (r.width + r.height)
}
 
//Circle 타입에 대한 Shape 인터페이스 구현 
func (c Circle) area() float64 { 
    return math.Pi * c.radius * c.radius
}
func (c Circle) perimeter() float64 { 
    return 2 * math.Pi * c.radius
}


func main(){
	r := Rect1{width: 10, height: 20}
	c := Circle{radius: 10}
	showArea(r, c)
	
	assertion()
}

func showArea(shapes ...Shape) {
	for _,s:=range shapes{
		a:= s.area()
		println(a)
	}
}

// empty interface
// func Marshal(v interface{}) ([]byte, error);
// func Unmarshal(data []byte, v interface{}) error;
// 사용하는 이유는 함수의 인자나 리턴값으로 모든 타입을 받을 수 있게 하기 위해서이다.

// type assertion
func assertion(){
	var a interface{} = 1
 
    i := a       // a와 i 는 dynamic type, 값은 1
    j := a.(int) // j는 int 타입, 값은 1
 
    println(i)  // 포인터주소 출력
    println(j)  // 1 출력
}