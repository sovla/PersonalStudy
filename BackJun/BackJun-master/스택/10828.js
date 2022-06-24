const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim()
  .split("\n");

const length = input[0];
const result = [];
const resultMessage = [];
for (let index = 0; index < length; index++) {
  const element = input[index + 1];

  const [method, number] = element.split(" ");
  const resultLength = result.length;
  switch (method.replace("\r", "")) {
    case "push":
      result.push(+number.replace("\r", ""));
      break;
    case "top":
      resultMessage.push(result[resultLength - 1] ?? -1);
      break;
    case "size":
      resultMessage.push(resultLength);
      break;
    case "empty":
      resultMessage.push(result.length ? 0 : 1);
      break;
    case "pop":
      resultMessage.push(result.length ? result[resultLength - 1] : -1);
      result.pop();
      break;
    default:
      break;
  }
}

console.log(resultMessage.join("\n"));
