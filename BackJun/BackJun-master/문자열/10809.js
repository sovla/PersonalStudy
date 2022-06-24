const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();
const array = input.split("");
let result = [];
for (let i = 97; i < 123; i++) {
    result.push(array.findIndex((v) => v === String.fromCharCode(i)));
}

console.log(result.join(" "));
