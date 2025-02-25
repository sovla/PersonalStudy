/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10813                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10813                          #+#        #+#      #+#    */
/*   Solved: 2025/02/25 15:28:59 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [basketInfo, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

const baskets = new Array(+basketInfo.split(" ")[0])
  .fill(0)
  .map((v, i) => i + 1);

numbers.forEach((v) => {
  const [i, j] = v.split(" ").map(Number);

  const temp = baskets[i - 1];
  baskets[i - 1] = baskets[j - 1];
  baskets[j - 1] = temp;
});

console.log(baskets.join(" "));
