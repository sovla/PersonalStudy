const fs = require("fs");
let input = fs.readFileSync("input.txt").toString();

const [ArrayCount, Array] = input.split("\n");
const minNumber = Math.min(...Array.split(" "));
const maxNumber = Math.max(...Array.split(" "));
console.log(minNumber + " " + maxNumber);
