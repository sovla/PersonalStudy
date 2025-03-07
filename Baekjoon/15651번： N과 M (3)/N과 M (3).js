/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 15651                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/15651                          #+#        #+#      #+#    */
/*   Solved: 2025/03/07 16:56:12 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const [N, M] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const results = [];

/**
 *
 * @param {Array<Number>} array
 */
const backtrack = (array) => {
  if (array.length === M) {
    results.push(array.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    array.push(i);
    backtrack(array);
    array.pop();
  }
};

backtrack([]);
console.log(results.join("\n"));
