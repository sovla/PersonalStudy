/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 11399                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/11399                          #+#        #+#      #+#    */
/*   Solved: 2025/03/14 17:01:28 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [info, wait] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let total = 0;
let waitCount = 0;

const numbers = wait.split(" ").map(Number);
const sortedNumbers = numbers.sort((a, b) => a - b);
for (const element of sortedNumbers) {
  waitCount += element;
  total += waitCount;
}

console.log(total);
