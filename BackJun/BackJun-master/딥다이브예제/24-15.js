const counter = (function () {
  let counter = 0;
  //  함수를 인수로 전달받는 클로저를 반환
  return function (predicate) {
    //  인수로 전달받은 보조 함수에 상태 변경을 위임한다
    counter = predicate(counter);

    return counter;
  };
})();

function inc(n) {
  return ++n;
}
function dec(n) {
  return --n;
}
console.log(counter(inc)); // 1
console.log(counter(inc)); // 2

console.log(counter(dec)); // 1
