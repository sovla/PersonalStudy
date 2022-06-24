const fs = require("fs");
const input = fs
    .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
    .toString()
    .trim()
    .split("\n");

const [N, Numbers, arr] = input;

const arrays = arr.split(" ").map(Number);
const arrNumber = Numbers.split(" ").map(Number);
let position = new Array(N - 1).fill(0);
let result = [];

backTraking(0);

function backTraking(depth) {
    for (let i = 0; i < 4; i++) {
        if (arrays[i] > 0) {
            arrays[i]--;
            position[depth] = i + 1;
            if (position.filter(Boolean).length === N - 1) {
                let inResult = 0;
                let inResultString = "";
                for (let j = 0; j < arrNumber.length - 1; j++) {
                    let a = j == 0 ? arrNumber[0] : inResult;
                    const b = arrNumber[j + 1];

                    switch (position[j]) {
                        case 1:
                            inResultString += `${a}+${b}`;
                            inResult = a + b;
                            break;
                        case 2:
                            inResultString += `${a}-${b}`;
                            inResult = a - b;
                            break;
                        case 3:
                            inResultString += `${a}X${b}`;
                            inResult = a * b;
                            break;
                        case 4:
                            inResultString += `${a}/${b}`;
                            if (a < 0) {
                                a = Math.abs(a);
                                inResult = Math.floor(a / b) * -1;
                            } else {
                                inResult = Math.floor(a / b);
                            }

                            break;
                    }
                }

                result.push(inResult);
            } else {
                backTraking(depth + 1);
            }
            arrays[i]++;
            position[depth] = 0;
        }
    }
}

const max = Math.max(...result);
const min = Math.min(...result);

console.log(max === 0 ? 0 : isNaN(max) ? 0 : max);
console.log(min === 0 ? 0 : isNaN(min) ? 0 : min);
