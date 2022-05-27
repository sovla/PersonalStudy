//  1.임시변수 사용을 줄이자
function getElements() {
  const result = {}; // 임시변수

  result.title = document.querySelector(".title");
  result.text = document.querySelector(".text");
  result.value = document.querySelector(".value");

  return result;
  // 변경 후 임시 객체가 선언 되어 있을 경우 CRUD에 대한 유혹을 받을 수 있다.
  // 만약 수정이 필요 한경우 이 함수를 변경하는 것이 아닌 새로운 함수를 만들어
  // 추상화를 통해 변경 사항에 맞춰 가는 것이 좋습니다.
  return {
    title: document.querySelector(".title"),
    text: document.querySelector(".text"),
    value: document.querySelector(".value"),
  };
}
function getSomeValue(params) {
  let temp = "";
  let tempVal = "";

  for (let i = 0; i < array.length; index++) {
    temp = array[i];
    temp += array[i];
    temp += array[i];
    temp += array[i];
    temp += array[i];
  }

  if (temp === "None") {
    tempVal = "None";
  } else if (temp === "First") {
    temp += "First";
  }
  // 어떤 값이 올지 모르게 된다.
  return temp;
}
//  임시 변수를 제거해야 하는 이유
//  1. 명령형으로 가득한 로직
//  2. 어디서 어떻게 변경이 될지 파악이 어려운 코드가 된다(디버깅이 어려움)
//  3. 추가적인 코드를 작성하게 되는 유혹에 빠지기 쉽다.(let ...)

//  함수는 이러한 경우 베스트
//  1. 함수당 하나의 역할만 하기
//  2. 바로 반환하기(임시변수 생성 X)
//  3. 고차함수
//  4. 선언형 함수로 작성하는 것이 좋다

//  선언형 함수 : 무엇을 할것인가
function allSum(arr) {
  return arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
}
//  명령형 함수 : 무엇을 어떻게 할 것인가
function allSum(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

// ------------------------------------------

//  2.호이스팅에 주의하자
//  var 키워드로 생성한 변수는 런타임시 최상단으로 끌어올려진다. 대신 초기화는 되지 않는다.
console.log(global); // undefined
var global = 0;
console.log(global); // 0

//  function 키워드로 생성한 함수는 소스 최상단으로 끌어올려진다.

alert(); // 사용 가능

function alert() {
  // ...
}
//  이러한 행위로 인해  문제 -> 코드 작성 -> 예측 -> 실행  과정중 예측이 어려워 결과값이 다르게 나오는 경우가 있다.
//  호이스팅에 주의하며 아래 3가지를 지켜주는 것이 좋다
//  1. var 사용을 지양하자
//  2. function 키워드를 사용할때 주의하자
//  3. 함수 표현식을 이용해 코드를 작성하자 ( const sum = (a,b) => a+b )
