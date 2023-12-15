// 함수추출하기
// 절차
// 1. 함수를 새로 만들고 목적을 잘 드러내는 이름을 붙인다.
// 2. 추출할 코드를 원본 함수에서 복사하여 새 함수에 붙여넣는다.
// 3. 추출한 코드 중 원본 함수의 지역 변수를 참조하거나 추출한 함수의 유효범위를 벗어나는 변수는 없는지 검사한다. 있다면 매개변수로 전달한다.
// 4. 변수를 다 처리했다면 컴파일한다.
// 5. 원본 함수에서 추출한 코드 부분을 새로 만든 함수를 호출하는 문장으로 바꾼다.
// 6. 테스트한다.
// 7. 다른 코드에 방금 추출한 것과 똑같거나 비슷한 코드가 없는지 살핀다. 있다면 방금 추출한 새 함수를 호출하도록 바꿀지 검토한다.

// function printOwing(invoice) {
//   let outstanding = 0;

//   console.log("***********************");
//   console.log("**** 고객 채무 ****");
//   console.log("***********************");

//   for (const o of invoice.orders) {
//     outstanding += o.amount;
//   }

//   const today = Clock.today;
//   invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

//   console.log(`고객명: ${invoice.customer}`);
//   console.log(`채무액: ${outstanding}`);
//   console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
// }

function printOwing(invoice) {
  printBanner();

  const outstanding = calculateOutstanding(invoice);

  recordDueDate(invoice);

  printDetails(invoice, outstanding);

  function printBanner() {
    console.log("***********************");
    console.log("**** 고객 채무 ****");
    console.log("***********************");
  }
}

function calculateOutstanding(invoice) {
  let result = 0;
  for (const o of invoice.orders) {
    result += o.amount;
  }
  return result;
}

function recordDueDate(invoice) {
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetails(invoice, outstanding) {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate.toLocaleDateString()}`);
}
