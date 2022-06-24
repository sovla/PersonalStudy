const fs = require("fs");
let input = fs.readFileSync("input.txt").toString().trim();
const array = input.split("\n");
const count = array[0];

for (let i = 0; i < count; i++) {
    const innerArray = array[i + 1].split(" ");
    const length = innerArray[0];
    let add = 0;
    for (let j = 1; j < innerArray.length; j++) {
        add += +innerArray[j];
    }
    const av = add / length;
    const filter = innerArray.splice(1, length).filter((v) => v > av);
    const string = ((filter.length / length) * 100).toFixed(3);
    console.log(string + "%");
}
