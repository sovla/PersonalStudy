const fs = require("fs");
let input = fs
    .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
    .toString()
    .trim()
    .toUpperCase();

const map = new Map();
const array = input.split("");
for (let i = 0; i < array.length; i++) {
    const count = map?.get(array[i]) ?? 0;
    map.set(array[i], count + 1);
}
let result = "";
let max = 0;
map.forEach((v, k) => {
    if (max < v) {
        max = v;
        result = k;
    } else if (max === v) {
        result = "?";
    }
});
if (result) {
    console.log(result);
}
