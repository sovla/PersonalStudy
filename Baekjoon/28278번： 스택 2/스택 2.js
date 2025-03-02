/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 28278                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/28278                          #+#        #+#      #+#    */
/*   Solved: 2025/03/01 23:39:59 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [N, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const stack = [];

const results = [];

numbers.forEach((v) => {
  const commands = +v[0];

  if (commands === 1) {
    const number = +v.split(" ")[1];
    stack.push(number);
  } else if (commands === 2) {
    results.push(stack.length ? stack.pop() : -1);
  } else if (commands === 3) {
    results.push(stack.length);
  } else if (commands === 4) {
    results.push(stack.length ? 0 : 1);
  } else if (commands === 5) {
    results.push(stack.length ? stack.at(-1) : -1);
  }
});

console.log(results.join("\n"));
