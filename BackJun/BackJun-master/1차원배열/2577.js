const fs = require("fs");
let input = fs.readFileSync("input.txt").toString();

const result = input.split("\n").reduce((prev, curr) => +prev * +curr) + "";
let count = new Array(10).fill(0);
for (let i = 0; i < result.length; i++) {
  const element = result[i];
  count[+element]++;
}

for (const item of count) {
  console.log(item);
}
