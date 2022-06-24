const fs = require("fs");
let input = fs
    .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
    .toString()
    .trim()
    .toUpperCase();
