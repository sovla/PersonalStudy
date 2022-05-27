//  1.var를 지양 하자
//  var의 특징 (1) : 중복 선언 가능
var name = "Jun";
var name = "Jun";

//  var의 특징 (2) : 함수 스코프
function loofFor(array) {
  for (var index = 0; index < array.length; index++) {
    // ...
  }
  console.log(index); // var는 함수 스코프이므로 참조가 가능하다
}

//  var의 특징 (3) : 전역 공간을 더럽힌다.

var setTimeOut = "setTimeOut";

function setTimeOut() {
  return true;
}
setTimeOut(() => {
  console.log("1초후 실행");
}, 1000);
// Uncaught TypeError: setTimeOut is not a function

for (var index; index < arr.length; index++) {
  // ...
}
console.log(index); // arr.length 만큼 올라가 있다.
console.log(global.index); // 위와 동일한 값으로 나와 있다.

//  var의 특징 (4) : 재할당 가능 및 선언하지 않고 사용 가능
var age = 20;
age = 23;

console.log(none); // undefined

//  var의 특징 (5) : var로 선언된 변수가 호이스팅 되어진다.

console.log(global); //   undefined

var global = 0;

console.log(global); // 0
