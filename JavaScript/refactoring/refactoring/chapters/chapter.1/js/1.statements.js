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

    volumeCredits += Math.max(perf.audience - 30, 0);

    if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);

    result += ` ${play.name}: ${format(thisAmount / 100)} (${perf.audience}석)\n`;
    totalAmount += thisAmount;
  }

  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트 : ${volumeCredits}점\n`;
  return result;
}
/*
이 함수를 제일 처음 봣을때 드는 생각은
1. totalAmount가 쓰임이 너무 많다 
2. 계산 부분과 출력부분이 따로 있으면 좋겠다.
3. 일반적인 함수같다. 굳이 나눠야 될 정도 인가? 생각은 들지만 몇몇 변수가 이름이 눈에 안익음
함수가 계산 + 출력 두가지 일을 하다보니 길어지는것 같은 느낌

책에서는 이코드의 문제점을 이렇게 잡았음
1. html로 출력하는 기능이 추가되면? 복붙해서 해결해야함.
2. 장르가 여러가지로 추가하게 되면? 복붙한 소스랑 일관성있게 동작할 수 있도록 확인해야함

리팩토링 과정
1. 테스트 작성
2. statement 함수 쪼개기
*/

// Test Code
function testRun() {
  const expected = `청구 내역 (고객명: BigCo)\n Hamlet: $650.00 (55석)\n As You Like It: $580.00 (35석)\n Othello: $500.00 (40석)\n총액: $1,730.00\n적립 포인트 : 47점\n`;

  const actual = statement(invoices, plays);

  assert(actual === expected, "테스트 실패");
}

if (require.main == module) {
  testRun();
}
