const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim()
  .split("\n");

const message = [];

for (const item of input) {
  const result = [];

  for (const _item of item.split("")) {
    if (_item === "(" || _item === ")" || _item === "[" || _item === "]")
      result.push(_item);
  }

  for (let index = 0; index < result.length; index++) {
    const element = result[index];

    if (
      (element === ")" && result[index - 1] === "(") ||
      (element === "]" && result[index - 1] === "[")
    ) {
      console.log(result);
      result.splice(index - 1, 2);
      console.log(result);
      index = 0;
    }
  }
  message.push(result.length ? "no" : "yes");
}

console.log(message.join("\n"));
