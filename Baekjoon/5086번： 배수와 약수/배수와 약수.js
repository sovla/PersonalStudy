/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 5086                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/5086                           #+#        #+#      #+#    */
/*   Solved: 2025/02/26 21:46:22 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const result = [];
for (const element of inputs) {
  if (element === "0 0") break;
  const [A, B] = element.split(" ").map(Number);

  if (A % B === 0) {
    // 약수
    result.push("multiple");
  } else if (B % A === 0) {
    // 배수
    result.push("factor");
  } else {
    result.push("neither");
  }
}

console.log(result.join("\n"));
