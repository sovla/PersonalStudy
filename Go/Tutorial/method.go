package main

type Rect struct {
	width, height int
}

func (r Rect) area() int {
	return r.width * r.height
}



func main(){
	rect := Rect{width: 10,height: 20}
	area := rect.area()
	println(area) // 200


	// 포인터 receiver
	rect2 := Rect{width: 10,height: 20}
	area2 := rect2.area2()
	println(area2) // 220
	println(rect2.width) // 11

	// non-pointer receiver
	rect3 := Rect{width: 10,height: 20}
	area3 := rect3.area3()
	println(area3) // 220
	println(rect3.width) // 10
}

// 포인터 receiver
func (r *Rect) area2() int {
	r.width++
	return r.width * r.height
}
// Non-pointer receiver
func (r Rect) area3() int {
	r.width++
	return r.width * r.height
}