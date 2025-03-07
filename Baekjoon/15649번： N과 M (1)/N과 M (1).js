/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 15649                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/15649                          #+#        #+#      #+#    */
/*   Solved: 2025/03/05 15:17:51 by sovla         ###          ###   ##.kr    */
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

const backtrack = (array) => {
  if (array.length === M) {
    results.push(array.join(" "));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!array.includes(i)) {
      array.push(i);
      backtrack(array);
      array.pop();
    }
  }
};

backtrack([]);

console.log(results.join("\n"));
