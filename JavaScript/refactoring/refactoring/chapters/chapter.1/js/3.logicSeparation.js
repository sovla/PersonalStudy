/*
- [v] 테스트 코드 작성
- [v] 함수 추출하기 진행
- [ ] 주요 로직 분리
주요 로직 분리 겸 HtmlRender 함수로 추출
1. 주요 로직 분리 전 데이터 분리



*/

const { assert } = require("console");
const invoices = require("../json/invoice.json");
const plays = require("../json/plays.json");

function statement(invoice) {
  const statementData = {};
  statementData.customer = invoice.customer;
  statementData.performances = invoice.performances.map(enrichPerformance);
  statementData.totalAmount = totalAmount(statementData);
  statementData.totalVolumeCredits = totalVolumeCredits(statementData);

  return renderPlainText(statementData, invoice);

  function playFor(perf) {
    return plays[perf.playID];
  }

  function enrichPerformance(aPerformance) {
    const result = Object.assign({}, aPerformance);
    result.play = playFor(result);
    result.amount = amountFor(result);
    result.volumeCredits = volumeCreditsFor(result);
    return result;
  }

  function amountFor(aPerformance) {
    let resultAmount = 0;
    switch (aPerformance.play.type) {
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

  function volumeCreditsFor(aPerformance) {
    let result = 0;

    result += Math.max(aPerformance.audience - 30, 0);

    if ("comedy" === aPerformance.play.type) result += Math.floor(aPerformance.audience / 5);
    return result;
  }

  function totalAmount(statementData) {
    let result = 0;
    for (let aPerformance of statementData.performances) {
      result += aPerformance.amount;
    }
    return result;
  }

  function totalVolumeCredits(statementData) {
    let volumeCredits = 0;

    for (let aPerformance of statementData.performances) {
      volumeCredits += aPerformance.volumeCredits;
    }
    return volumeCredits;
  }
}

function renderPlainText(data) {
  let result = `청구 내역 (고객명: ${data.customer})\n`;

  for (let aPerformance of data.performances) {
    result += ` ${aPerformance.play.name}: ${usd(aPerformance.amount)} (${
      aPerformance.audience
    }석)\n`;
  }

  result += `총액: ${usd(data.totalAmount)}\n`;
  result += `적립 포인트 : ${data.totalVolumeCredits}점\n`;
  return result;
}

function usd(aNumber) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(aNumber / 100);
}

// Test Code
function testRun() {
  const expected = `청구 내역 (고객명: BigCo)\n Hamlet: $650.00 (55석)\n As You Like It: $580.00 (35석)\n Othello: $500.00 (40석)\n총액: $1,730.00\n적립 포인트 : 47점\n`;
  console.time("statement");
  const actual = statement(invoices, plays);
  console.timeEnd("statement");

  assert(actual === expected, `테스트 실패---\nresult: ${actual}\nexpected: ${expected}`);
}

if (require.main == module) {
  testRun();
}
