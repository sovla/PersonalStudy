/*
- [x] 테스트 코드 작성
- [ ] 함수 추출하기 진행

함수 추출할 코드는 switch문이다. 
그 이유는 코드를 분석해서 얻은 정보인 `switch문이 계산하는 정보`라는 것은 휘발성이 강한 정보이기에, 빠르게 코드에 반영시켜야 한다.

1. amountFor 함수로 추출 및 변수 네이밍 정리
2. playFor 함수로 play변수 제거
3. local 변수 제거 thisAmount -> amountFor(perf)
4. 반복문 쪼개기 (volumeCreditsFor)
5. 반복문 쪼개기 (totalAmount)

*/

const { assert } = require("console");
const invoices = require("../json/invoice.json");
const plays = require("../json/plays.json");

function statement(invoice) {
  let result = `청구 내역 (고객명: ${invoice.customer})\n`;

  for (let aPerformance of invoice.performances) {
    result += ` ${playFor(aPerformance).name}: ${usd(amountFor(aPerformance))} (${
      aPerformance.audience
    }석)\n`;
  }

  result += `총액: ${usd(totalAmount(invoice))}\n`;
  result += `적립 포인트 : ${totalVolumeCredits(invoice)}점\n`;
  return result;
}

function totalAmount(invoice) {
  let result = 0;
  for (let aPerformance of invoice.performances) {
    result += amountFor(aPerformance);
  }
  return result;
}

function totalVolumeCredits(invoice) {
  let volumeCredits = 0;

  for (let aPerformance of invoice.performances) {
    volumeCredits += volumeCreditsFor(aPerformance);
  }
  return volumeCredits;
}

function usd(aNumber) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
}

function volumeCreditsFor(aPerformance) {
  let result = 0;

  result += Math.max(aPerformance.audience - 30, 0);

  if ("comedy" === playFor(aPerformance).type) result += Math.floor(aPerformance.audience / 5);
  return result;
}

function playFor(perf) {
  return plays[perf.playID];
}

function amountFor(aPerformance) {
  let resultAmount = 0;
  switch (playFor(aPerformance).type) {
    case "tragedy":
      resultAmount = 40000;
      if (aPerformance.audience > 30) {
        resultAmount += 1000 * (aPerformance.audience - 30);
      }
      break;

    case "comedy":
      resultAmount = 30000;
      if (aPerformance.audience > 20) {
        resultAmount += 10000 + 500 * (aPerformance.audience - 20);
      }
      resultAmount += 300 * aPerformance.audience;

      break;

    default:
      throw new Error(`알 수 없는 장르 : ${play.type}`);
  }
  return resultAmount;
}

// Test Code
function testRun() {
  const expected = `청구 내역 (고객명: BigCo)\n Hamlet: $650.00 (55석)\n As You Like It: $580.00 (35석)\n Othello: $500.00 (40석)\n총액: $1,730.00\n적립 포인트 : 47점\n`;
  console.time("statement");
  const actual = statement(invoices, plays);
  console.timeEnd("statement");

  assert(actual === expected, "테스트 실패");
}

if (require.main == module) {
  testRun();
}
