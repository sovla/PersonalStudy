const person = {};

Object.defineProperty(person, "firstName", {
  value: "Ungmo",
  writable: true,
  enumerable: true,
  configurable: true,
});

Object.defineProperty(person, "lastName", {
  value: "Lee",
  // 디스크럽터 객체의 프로퍼티를 누락 시키면 undefined, false가 기본값이다.
});

console.log(Object.getOwnPropertyDescriptors(person));

console.log(Object.keys(person));
//  [ 'firstName' ]
//  enumerable 열거 옵션 false

person.lastName = "Kim";
//  에러는 안나지만 바뀌지 않는다. writable 값 변경 가능 옵션 false

delete person.lastName;
//  에러는 안나지만 삭제되지 않는다. configurable 프로퍼티 재정의 가능 옵션 false
