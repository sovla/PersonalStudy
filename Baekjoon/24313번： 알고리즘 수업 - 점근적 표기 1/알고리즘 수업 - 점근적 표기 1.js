/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 24313                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/24313                          #+#        #+#      #+#    */
/*   Solved: 2025/02/28 16:04:06 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
let [numbers, c, n0] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [a1, a0] = numbers.split(" ").map(Number);

if (a0 < 0) n0 = +n0 - +a0;

const fn = a1 * n0 + a0;

if (fn <= n0 * c) {
  console.log(1);
} else {
  console.log(0);
}
