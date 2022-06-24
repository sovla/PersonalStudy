const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim()
  .split("\n");

let arr = input.slice(1, +input[0] + 1).map((v, i) => {
  const [age, name] = v.split(" ");
  return {
    age: +age,
    name,
    i,
  };
});

console.log(
  arr
    .sort((a, b) => {
      let result = 0;
      if (a.age === b.age) {
        if (a.i > b.i) {
          result = 1;
        } else if (a.i < b.i) {
          result = -1;
        }
      } else {
        if (a.age > b.age) {
          result = 1;
        } else if (a.age < b.age) {
          result = -1;
        }
      }
      return result;
    })
    .map((v) => `${v.age} ${v.name}`)
    .join("\n")
);
