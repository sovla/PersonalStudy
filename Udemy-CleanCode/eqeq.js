/**   eqeq == 느슨한 검사는 최대한 지양하자
 *  == 의 경우 해당 값들 끼리 확인만 한다
 *  === 엄격한 검사를 통해 타입또한 비교할수 있도록 하자.
 */
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

//  느슨한 검사는 암묵적 타입변환이 이뤄지고 값을 비교하는 것이다.
//  사용자가 타입을 변환 할 경우를 명시적 타입변환이라고 하고
//  js 자체적으로 변경한 경우엔 암묵적 타입 변환 이라 한다.
//  암묵적 타입 변환을 이용하는 것은 좋지 않은 생각이다. 어떠한 결과를 초래할지 모르기 때문에 명시적 형 변환을 주로 사용하자.

"1" == 1; // 암묵적으로 타입을 변환한뒤 값을 비교하는 것

11 + " 문자와 결합"; // number + string 의 경우 string으로 암묵적 변환

!!"문자열"; // true
!!""; // false

//  명시적 형 변환
String(11 + " 문자와 결합");
Boolean("문자열");
Boolean("");
