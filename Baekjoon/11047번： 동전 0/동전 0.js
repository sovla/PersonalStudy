/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 11047                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/11047                          #+#        #+#      #+#    */
/*   Solved: 2025/03/14 15:53:07 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const [info, ...coins] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v, i) => (i === 0 ? v : +v));

const [N, K] = info.split(" ").map(Number);

let total = K;
let result = 0;
while (total !== 0) {
  const max = Math.max(...coins.filter((v) => v <= total));
  result += Math.floor(total / max);
  total %= max;
}

console.log(result);
