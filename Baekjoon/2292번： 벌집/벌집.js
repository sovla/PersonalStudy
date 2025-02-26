/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2292                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2292                           #+#        #+#      #+#    */
/*   Solved: 2025/02/26 10:09:25 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const N = +fs.readFileSync("/dev/stdin").toString().trim();

function triangularNumbers(n) {
  return (n * (n + 1)) / 2;
}
let index = 0;
while (triangularNumbers(index) * 6 + 1 < N) {
  index++;
}
console.log(index + 1);
