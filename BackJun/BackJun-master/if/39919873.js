const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
const [first, second] = input.split("\n");
const [hour, minute] = first.split(" ");
console.log(solution(hour, minute, second) === "19 0");

function solution(a, b, c) {
  let time = +a * 60 + +b;

  let endTime = time + +c;

  if (endTime >= 1440) {
    endTime %= 60;
  }
  return parseInt(endTime / 60) + " " + (endTime % 60);
}
