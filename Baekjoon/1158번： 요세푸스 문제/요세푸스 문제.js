/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1158                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1158                           #+#        #+#      #+#    */
/*   Solved: 2025/02/27 11:59:31 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [N, K] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const result = [];
const array = Array.from({ length: N }, (_, i) => i + 1);

let index = 0;
while (array.length) {
  index = (index + K - 1) % array.length;
  result.push(array.splice(index, 1)[0]);
}

console.log(`<${result.join(", ")}>`);
