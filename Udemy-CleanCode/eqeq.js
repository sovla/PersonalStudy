//  eqeq == 느슨한 검사는 최대한 지양하자
//  == 의 경우 해당 값들 끼리 확인만 한다
//  === 엄격한 검사를 통해 타입또한 비교할수 있도록 하자.

"1" == 1; // true
1 == true; // true

"1" === 1; // false
1 === true; // false

//  시나리오 : 인풋 값을 받아 올 경우 숫자가 아닌 문자열로 넘어올때

const value = "0";

value == 0; // true
value === 0; // false

value < 1000; // true
value == 0; //  true
// 이렇게 사용할 경우 어떠한 위험이 있을지 모른다 확실한 형 변환 또는 타입 검사를 하도록 하자
Number(value) < 1000;
