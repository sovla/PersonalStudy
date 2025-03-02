/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10773                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10773                          #+#        #+#      #+#    */
/*   Solved: 2025/03/02 09:48:52 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const [N, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const stack = [];

numbers.forEach((number) => {
  if (number === 0) {
    stack.pop();
  } else {
    stack.push(number);
  }
});

console.log(stack.reduce((prev, curr) => prev + curr, 0));
