/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 4779                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/4779                           #+#        #+#      #+#    */
/*   Solved: 2025/03/05 12:35:36 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

/**
 *
 * @param {string} str
 */
const splitStr = (str) => {
  const isMatch = str.match("--");
  if (isMatch) {
    let repeatCount = 0;
    const maxCounts = [];
    for (let index = 0; index < str.length; index++) {
      if (str[index] === " ") {
        repeatCount && maxCounts.push(repeatCount);
        repeatCount = 0;
      } else {
        repeatCount++;
      }
    }
    if (repeatCount > 0) {
      maxCounts.push(repeatCount);
    }

    const maxCount = Math.max(...maxCounts);
    return splitStr(
      str.replaceAll(
        "-".repeat(maxCount),
        "-".repeat(maxCount / 3) +
          " ".repeat(maxCount / 3) +
          "-".repeat(maxCount / 3)
      )
    );
  } else {
    return str;
  }
};

const fs = require("fs");
const numbers = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const results = [];
numbers.forEach((v) => {
  const count = Math.pow(3, v);

  results.push(splitStr("-".repeat(count)));
});

console.log(results.join("\n"));

// GPT가 알려준 해법
// function makeCantor(arr, start, end) {
//     if (end - start < 2) return;
//     const gap = Math.floor((end - start) / 3);
//     for (let i = start + gap; i < start + 2 * gap; i++) {
//       arr[i] = ' ';
//     }
//     makeCantor(arr, start, start + gap);
//     makeCantor(arr, start + 2 * gap, end);
//   }

//   const n = Number(input); // 예를 들어 입력받은 N
//   const len = Math.pow(3, n);
//   const arr = new Array(len).fill('-');
//   makeCantor(arr, 0, len);
//   console.log(arr.join(''));
