/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10811                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10811                          #+#        #+#      #+#    */
/*   Solved: 2025/02/25 16:23:18 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [basketInfo, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = basketInfo.split(" ").map(Number);
let baskets = new Array(N).fill(0).map((_, i) => i + 1);

numbers.forEach((v) => {
  const [start, end] = v.split(" ").map(Number);

  const copyArray = baskets.slice(start - 1, end);

  copyArray.reverse();

  for (let index = 0; index < copyArray.length; index++) {
    baskets[start - 1 + index] = copyArray[index];
  }
});
console.log(baskets.join(" "));
