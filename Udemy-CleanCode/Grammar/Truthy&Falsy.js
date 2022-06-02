/*
 * Truthy : 참 같은 값
 * Falsy : 거짓 같은 값
 */

// Truthy 에 해당하는 값 : true , {} , [] , 42 , "0" , "false" , new Date() , -42 , 12n , 3.14
// Falsy 에 해당하는 값 : false , null , 0 , -0 , 0n , NaN , ""

function getIntro(name) {
  if (name === null || name === undefined) {
    // Falsy 값을 이용해 코드를 줄일 수 있다.
    return "사람이 없네요";
  }

  if (!name) {
    // Falsy 값 활용
    return "사람이 없네요";
  }
  return `안녕하세요 ${name}님`;
}
