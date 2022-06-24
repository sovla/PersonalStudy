const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

let set = new Set();

const numbers = input.split("\n");

for (const item of numbers) {
  set.add(item % 42);
}
console.log(set.size);
