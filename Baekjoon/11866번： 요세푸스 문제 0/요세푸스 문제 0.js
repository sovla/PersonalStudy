/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 11866                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/11866                          #+#        #+#      #+#    */
/*   Solved: 2025/03/02 19:17:16 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const [N, K] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const queue = Array.from(
  {
    length: N,
  },
  (_, i) => i + 1
);

const results = [];

while (queue.length) {
  for (let i = 0; i < K - 1; i++) {
    queue.push(queue.shift());
  }
  results.push(queue.shift());
}

console.log(`<${results.join(", ").trim()}>`);
