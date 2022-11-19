// switch (play.type) {
//   case 'tragedy':
//     thisAmount = 40000;
//     if (perf.audience > 30) {
//       thisAmount += 1000 * (perf.audience - 30);
//     }
//     break;

//   case 'comedy':
//     thisAmount = 30000;
//     if (perf.audience > 20) {
//       thisAmount += 10000 + 500 * (perf.audience - 20);
//     }
//     thisAmount += 300 * perf.audience;

//     break;

//   default:
//     throw new Error(`알 수 없는 장르 : ${play.type}`);
// }
// --------------- 리팩토링 함수 추출하기
// 과정 1. perf, play, thisAmount 와 같은 즉시 함수에사 사용할 수 없는 변수가 있는지 확인
// 1-1 perf, play는 매개변수로 넘겨주면 된다.
// 1-2 thisAmount의 경우 함수 안에서 값이 변경되는데 이런 변수는 조심히 다뤄야 한다. 지금의 경우 리턴을 통해 값을 전달하도록 하였다.

function amountFor(perf, play) {
  // 값이 바뀌지 않는 매개변수로 전달
  let thisAmount = 0; // 변수를 초기화 하는 코드
  switch (play.type) {
    case 'tragedy':
      thisAmount = 40000;
      if (perf.audience > 30) {
        thisAmount += 1000 * (perf.audience - 30);
      }
      break;

    case 'comedy':
      thisAmount = 30000;
      if (perf.audience > 20) {
        thisAmount += 10000 + 500 * (perf.audience - 20);
      }
      thisAmount += 300 * perf.audience;

      break;

    default:
      throw new Error(`알 수 없는 장르 : ${play.type}`);
  }
  return thisAmount;
}

module.exports = amountFor;
