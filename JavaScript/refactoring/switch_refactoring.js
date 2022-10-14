function amountFor(perf, play) {
  // 값이 바뀌지 않는 매개변수로 전달
  let thisAmount = 0; // 변수를 초기화 하는 코드
  switch (play.type) {
    case "tragedy":
      thisAmount = 40000;
      if (perf.audience > 30) {
        thisAmount += 1000 * (perf.audience - 30);
      }
      break;

    case "comedy":
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

module.export = amountFor;
