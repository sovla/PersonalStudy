const filePath = process.platform === "linux" ? "/dev/stdin" : "예제.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const testCase = input[0];
let filteredChar = [];
let strArr = [];
let curIndex;
let cnt = 0;
for (let i = 1; i <= input.length - 1; i++) {
  strArr = input[i].split("");
  filteredChar = [];
  //입력된 문자열을 각각 다른 문자로 배열에 입력함
  for (const val of input[i]) {
    if (filteredChar.indexOf(val) === -1) {
      filteredChar.push(val);
    }
  }
  //filtered배열에 있는 문자를 가지고 연속적인 문자을 삭제한다.
  for (const iter of filteredChar) {
    curIndex = strArr.indexOf(iter);
    strArr.splice(curIndex, 1);
    while (strArr.indexOf(iter) === curIndex) {
      strArr.splice(curIndex, 1);
    }
  }
  //연속적인 문자들을 삭제하고 배열의 길이를 통해 그룹단어를 확인한다
  if (strArr.length === 0) {
    cnt++;
  }
}

console.log(cnt);
