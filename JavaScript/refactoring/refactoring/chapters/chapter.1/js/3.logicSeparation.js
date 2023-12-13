/*
- [v] 테스트 코드 작성
- [v] 함수 추출하기 진행
- [ ] 주요 로직 분리
주요 로직 분리 겸 HtmlRender 함수로 추출
1. 주요 로직 분리 전 데이터 분리
2. html Render 작성
3. calculator 작성

*/

const { assert } = require("console");
const invoices = require("../json/invoice.json");
const plays = require("../json/plays.json");

function statement(invoice) {
  return renderPlainText(createStatement(invoice));
}

function htmlStatement(invoice) {
  return renderHtml(createStatement(invoice));
}

function renderHtml(data) {
  let result = `<h1>청구 내역 (고객명: ${data.customer})</h1>\n`;
  result += "<table>\n";
  result += "<tr><th>연극</th><th>좌석수</th><th>금액</th></tr>";
  for (let aPerformance of data.performances) {
    result += ` <tr><td>${aPerformance.play.name}</td><td>(${aPerformance.audience}석)</td>`;
    result += `<td>${usd(aPerformance.amount)}</td></tr>\n`;
  }
  result += "</table>\n";
  result += `<p>총액: <em>${usd(data.totalAmount)}</em></p>\n`;
  result += `<p>적립 포인트 : <em>${data.totalVolumeCredits}</em>점</p>\n`;
  return result;
}

function createStatement(invoice) {
  const result = {};
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);

  return result;

  function playFor(perf) {
    return plays[perf.playID];
  }

  function enrichPerformance(aPerformance) {
    const calculator = new PerformanceCalculator(aPerformance, playFor(aPerformance));
    const result = Object.assign({}, aPerformance);
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  }

  function totalAmount(statementData) {
    return statementData.performances.reduce(
      (total, aPerformance) => total + aPerformance.amount,
      0
    );
  }

  function totalVolumeCredits(statementData) {
    return statementData.performances.reduce(
      (total, aPerformance) => total + aPerformance.volumeCredits,
      0
    );
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

class PerformanceCalculator {
  constructor(aPerformance, aPlay) {
    this.performance = aPerformance;
    this.play = aPlay;
  }

  get amount() {
    let resultAmount = 0;
    switch (this.play.type) {
      case "tragedy":
        resultAmount = 40000;
        if (this.performance.audience > 30) {
          resultAmount += 1000 * (this.performance.audience - 30);
        }
        break;

      case "comedy":
        resultAmount = 30000;
        if (this.performance.audience > 20) {
          resultAmount += 10000 + 500 * (this.performance.audience - 20);
        }
        resultAmount += 300 * this.performance.audience;

        break;

      default:
        throw new Error(`알 수 없는 장르 : ${play.type}`);
    }
    return resultAmount;
  }

  get volumeCredits() {
    let result = 0;

    result += Math.max(this.performance.audience - 30, 0);

    if ("comedy" === this.play.type) result += Math.floor(this.performance.audience / 5);
    return result;
  }
}

// Test Code
function testRun() {
  const expected = `청구 내역 (고객명: BigCo)\n Hamlet: $650.00 (55석)\n As You Like It: $580.00 (35석)\n Othello: $500.00 (40석)\n총액: $1,730.00\n적립 포인트 : 47점\n`;
  console.time("statement");
  const actual = statement(invoices, plays);
  console.timeEnd("statement");

  assert(actual === expected, `테스트 실패---\nresult: ${actual}\nexpected: ${expected}`);

  // htmlStatement Test
  const htmlExpected = `<h1>청구 내역 (고객명: BigCo)</h1>
<table>
<tr><th>연극</th><th>좌석수</th><th>금액</th></tr> <tr><td>Hamlet</td><td>(55석)</td><td>$650.00</td></tr>
 <tr><td>As You Like It</td><td>(35석)</td><td>$580.00</td></tr>
 <tr><td>Othello</td><td>(40석)</td><td>$500.00</td></tr>
</table>
<p>총액: <em>$1,730.00</em></p>
<p>적립 포인트 : <em>47</em>점</p>
`;
  console.time("htmlStatement");
  const htmlActual = htmlStatement(invoices, plays);
  console.timeEnd("htmlStatement");

  assert(
    htmlActual === htmlExpected,
    `테스트 실패---\nresult: ${htmlActual}\nexpected: ${htmlExpected}`
  );

  // speed Test
  console.time("statement");
  [...Array(10000)].forEach(() => statement(invoices, plays));
  console.timeEnd("statement");
}

if (require.main == module) {
  testRun();
}
