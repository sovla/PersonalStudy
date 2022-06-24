const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

const Numbers = input.split("\n").map((v) => v.replace("\r", ""));
const maxNumber = Math.max(...Numbers);
const index = Numbers.findIndex((v) => maxNumber === +v.replace("\r", ""));

console.log(maxNumber + "\n" + index);
