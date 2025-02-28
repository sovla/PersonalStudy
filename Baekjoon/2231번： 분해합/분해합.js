/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2231                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2231                           #+#        #+#      #+#    */
/*   Solved: 2025/02/28 16:51:51 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim();

let copy = input;

// 분해합 구하기
// M + M%10의 더한 값
let results = [];
for (let index = input; index > 0; index--) {
  const remainder = index
    .toString()
    .split("")
    .reduce((prev, curr) => +prev + +curr, 0);

  if (index + remainder === input) {
    results.push(index);
  }
}

console.log(results.length === 0 ? 0 : Math.min(...results));
