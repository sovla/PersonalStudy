function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
    경계 다루기 (min-max)
    
    1. 최소값과 최대값을 다룬다.
    2. 최소값과 최대값 포함 여부를 결정해야한다(이상-초과 / 이하-미만)
    3. 혹은 네이밍에 최소값 최대값 포함
*/

// (1) 상수
const MIN_NUMBER = 1;
const MAX_NUMBER = 45;

getRandomNumber(MIN_NUMBER, MAX_NUMBER);

//---------------------------
function isAdult(age) {
  //  최소,최대값이 포함되는지
  //  초과 미만 이상 이하
  if (age >= 20) {
    return true;
  }
}
//  (2) 이름지정

const MIN_NUMBER_LIMIT = 10; // 초과
const MAX_NUMBER_LIMIT = 20; // 미만

const MIN_IN_NUMBER = 10; //  이상
const MAX_IN_NUMBER = 20; //  이하
