package main


type person struct {
	name string
	age int
}

func personConstructorFunction(name string,age int) *person {
	// 생성자 함수 $으로 포인터 전달
	person := person{}
	person.name = name
	person.age = age
	return &person
}

func main()  {
	// Go 구조체
	// Go는 객체지향 언어가 아니지만 구조체를 사용하여 객체지향적인 프로그래밍을 할 수 있다.
	// 구조체는 함수가 없고 필드만 가지고 있다.


	// 빈객체 할당
	p := person{}
	// 생성자 함수로 객체 생성
	personConstructor := person{name:"Lee",age:10}
	p.name = "Lee"
	p.age =10
	println(p.age,p.name)
	println(personConstructor.age,personConstructor.name)


	// zero value 구조체
	personZero := new(person)
	println(personZero.age,personZero.name)

	// 생성자 함수
	personConstructor2 := personConstructorFunction("Kim",20)

	println(personConstructor2.age,personConstructor2.name)
}