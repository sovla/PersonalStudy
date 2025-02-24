/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10951                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10951                          #+#        #+#      #+#    */
/*   Solved: 2025/02/25 08:53:37 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const inputs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .filter(Boolean);

const result = [];
for (let index = 0; index < inputs.length; index++) {
  const element = inputs[index]
    .split(" ")
    .reduce((prev, curr) => +prev + +curr, 0);

  result.push(element);
}

console.log(result.join("\n"));
