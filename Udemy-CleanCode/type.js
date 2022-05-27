//  typeof 타입을 검사하여 문자열로 해당 타입을 반환하는 연산자
//  자바 스크립트에는 두가지 형태의 값이 있는데 원시값과 참조값이다.
//  원시값의 경우 typeof로 가려내는데 어려움이 없지만 참조값의 경우 알아내기가 어렵다
function myFunction() {}
class myClass {}

typeof "문자열" === "string"; // true
typeof true === "boolean"; // true
typeof undefined === "undefined"; // true
typeof 123 === "number"; // true
typeof Symbol === "symbol"; // true

typeof myFunction === "function"; // true
typeof myClass === "function"; // true

//  래퍼 객체의 경우 판별하기 어려움이 있다.
typeof new String("문자열") === "object"; // true

// null === "object"  js 의 대표적인 오류 사례
typeof null === "object"; // true

//  instanceof 객체의 프로토타입 체인을 비교해주는 연산자
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p = {
  name: "jun",
  age: 20,
};

const jun = new Person("jun", 20);
const jun1 = new Person("jun1", 20);

console.log(jun1 instanceof Person); // true
console.log(p instanceof Person); // false

const arr = [];
const func = function () {};
const date = new Date();

arr instanceof Array; // true
func instanceof Function; // true
date instanceof Date; // true
// 여기서 문제는 최상위 프로토타입 체인이 Object 여서 true로 나온다.
arr instanceof Object; // true
func instanceof Object; // true
date instanceof Object; // true

//  래퍼 객체까지 구별 가능하다
Object.prototype.toString.call(new String("")); // [object 해당타입]

//  js는 동적 타입 언어이다.
//  js에서는 다양한 타입 검사 방법이 존재한다.(타입 검사또한 오류가 많기에 조심해야 된다.)
//  원하는 타입이 있을경우 Stackoverflow에서 잘 검색해서 사용하자??
