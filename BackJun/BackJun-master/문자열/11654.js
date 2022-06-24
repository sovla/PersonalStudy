const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();
const [a, string] = input.split("\n");
console.log(string.split("").reduce((prev, curr) => +prev + +curr));
