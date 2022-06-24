const fs = require("fs");
let input = fs
    .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
    .toString()
    .trim();

const [one, two] = input.split(" ").map((v) =>
    v
        .split("")
        .reverse()
        .reduce((p, c) => p + c)
);
console.log(one > two ? one : two);
