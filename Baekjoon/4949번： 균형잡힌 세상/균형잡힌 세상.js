/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 4949                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/4949                           #+#        #+#      #+#    */
/*   Solved: 2025/03/02 09:56:09 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const inputs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .filter((v) => v !== ".");

const results = [];
inputs.forEach((v) => {
  const stack = [];

  let result = true;
  for (const element of v.split("").filter((v1) => {
    return ["(", "[", "]", ")"].includes(v1);
  })) {
    if (element === "(" || element === "[") {
      stack.push(element);
    } else {
      const pair = {
        "]": "[",
        ")": "(",
      };

      const lastInStack = stack.at("-1");
      if (lastInStack === pair[element]) {
        stack.pop();
      } else {
        result = false;
        break;
      }
    }
  }
  if (stack.length) result = false;

  results.push(result ? "yes" : "no");
});

console.log(results.join("\n"));
