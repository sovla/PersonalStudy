const fs = require("fs");
const [N, ...words] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const result = words.filter((word) => {
  let prev = "";
  const used = new Set();

  for (const char of word) {
    if (prev !== char) {
      if (used.has(char)) return false;
      used.add(prev);
      prev = char;
    }
  }
  return true;
}).length;

console.log(result);
