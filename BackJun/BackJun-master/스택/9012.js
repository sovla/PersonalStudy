const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim()
  .split("\n");

const length = input[0];
const message = [];
for (let index = 0; index < length; index++) {
  const element = input[1 + index];

  // 조건 1 () 갯수가 안맞을 경우
  // 조건 2 () 짝이 없을 경우
  const result = element.replace("\r", "").split("");

  if (result.length % 2 === 0) {
    for (let j = 0; j < result.length; j++) {
      const _item = result[j];
      if (_item === ")" && result[j - 1] === "(") {
        result.splice(j - 1, 2);
        j = 0;
      }
    }
    result.length ? message.push("NO") : message.push("YES");
  } else {
    message.push("NO");
  }
}

console.log(message.join("\n"));
