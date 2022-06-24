const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim()
  .split("\n");
let array = input[1].split(" ").map(Number);
const set = Array.from(new Set([...array])).sort((a, b) => a - b);
const object = {};

set.forEach((v, i) => {
  object[v] = i;
});
let answer = [];
for (let i = 0; i < array.length; i++) {
  answer.push(object[array[i]]);
}

console.log(answer.join(" "));
