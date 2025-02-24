/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10952                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10952                          #+#        #+#      #+#    */
/*   Solved: 2025/02/25 08:50:04 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const inputs = fs.readFileSync("/dev/stdin").toString().split("\n");

const result = [];
for (let index = 0; index < inputs.length; index++) {
  const [A, B] = inputs[index].split(" ").map(Number);

  if (A === 0 && B === 0) {
    break;
  }
  result.push(A + B);
}

console.log(result.join("\n"));
