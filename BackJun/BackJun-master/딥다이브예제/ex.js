var x = 1;
function foo() {
  var x = 10;
  bar();
}
function bar() {
  console.log(x);
}
foo();
bar();

var arr = [];
for (var i = 0; i < 5; i++) {
  arr[i] = function () {
    return i;
  };
}
for (var index in arr) {
  console.log(arr[index]());
}
