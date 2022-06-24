const fs = require("fs");
let input = fs.readFileSync("input.txt").toString();

const [length, Array] = input.split("\n");
const maxNum = Math.max(...Array.split(" ").map(Number));
const addResult = Array.split(" ")
  .map((v) => {
    return (+v / +maxNum) * 100;
  })
  .reduce((p, c) => p + c);
console.log(parseFloat(addResult / length));
