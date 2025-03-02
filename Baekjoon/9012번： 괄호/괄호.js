/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 9012                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/9012                           #+#        #+#      #+#    */
/*   Solved: 2025/03/02 09:51:35 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [N, ...words] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const results = [];

words.forEach((v) => {
  const stack = [];

  let result = true;
  for (const c of v.split("")) {
    if (c === "(") {
      stack.push(c);
    } else {
      if (stack.at(-1) === "(") {
        stack.pop();
      } else {
        result = false;
        break;
      }
    }
  }

  results.push(result && stack.length === 0 ? "YES" : "NO");
});

console.log(results.join("\n"));
