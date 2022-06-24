const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();

const [count, ...A] = input.split("\n");
const Array1 = A.map((v) => v.replace("\r", ""));
let resultArray = [];
for (const item of Array1) {
  let result = 0;
  let addCount = 0;
  for (let i = 0; i < item.length; i++) {
    const element = item[i];
    if (element === "O") {
      addCount++;
      result += addCount;
    } else {
      addCount = 0;
    }
  }
  resultArray.push(result);
}
resultArray.forEach((v) => console.log(v));
