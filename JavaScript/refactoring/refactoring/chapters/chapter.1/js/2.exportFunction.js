/*
- [x] 테스트 코드 작성
- [ ] 함수 추출하기 진행

함수 추출할 코드는 switch문이다. 
그 이유는 코드를 분석해서 얻은 정보인 `switch문이 계산하는 정보`라는 것은 휘발성이 강한 정보이기에, 빠르게 코드에 반영시켜야 한다.
*/

const { assert } = require("console");
const invoices = require("../json/invoice.json");
const plays = require("../json/plays.json");

function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구 내역 (고객명: ${invoice.customer})\n`;

  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performances) {
    const play = plays[perf.playID];

    let thisAmount = 0;
    thisAmount = amountFor(play, perf);

    volumeCredits += Math.max(perf.audience - 30, 0);

    if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);

    result += ` ${play.name}: ${format(thisAmount / 100)} (${perf.audience}석)\n`;
    totalAmount += thisAmount;
  }

  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트 : ${volumeCredits}점\n`;
  return result;
}
function amountFor(play, perf) {
  let thisAmount = 0;
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

// Test Code
function testRun() {
  const expected = `청구 내역 (고객명: BigCo)\n Hamlet: $650.00 (55석)\n As You Like It: $580.00 (35석)\n Othello: $500.00 (40석)\n총액: $1,730.00\n적립 포인트 : 47점\n`;

  const actual = statement(invoices, plays);

  assert(actual === expected, "테스트 실패");
}

if (require.main == module) {
  testRun();
}
