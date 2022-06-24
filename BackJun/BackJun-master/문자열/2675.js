const fs = require("fs");
let input = fs.readFileSync("input.txt").toString();

const array = input.split("\n");
for (const item of array) {
    const innerArray = item.split(" ");
    let result = "";
    if (innerArray.length > 1) {
        for (let i = 0; i < innerArray[1].length; i++) {
            for (let j = 0; j < +innerArray[0]; j++) {
                result += innerArray[1][i];
            }
        }
        console.log(result);
    }
}
