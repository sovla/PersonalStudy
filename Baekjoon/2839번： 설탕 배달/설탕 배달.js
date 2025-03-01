/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2839                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2839                           #+#        #+#      #+#    */
/*   Solved: 2025/03/01 10:02:13 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim().split(" ")[0];

const bags = [];

for (let index = Math.floor(input / 3); index >= 0; index--) {
  const remainder = input - index * 3;

  if (remainder % 5 === 0) {
    bags.push(index + remainder / 5);
  }
}
console.log(bags.length ? Math.min(...bags) : -1);
