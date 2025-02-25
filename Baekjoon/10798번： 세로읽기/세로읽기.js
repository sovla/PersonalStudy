/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10798                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10798                          #+#        #+#      #+#    */
/*   Solved: 2025/02/26 07:52:33 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
let maxLineIndex = 0;
const inputs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((value) => {
    const values = value.split("");
    if (maxLineIndex < values.length) {
      maxLineIndex = values.length;
    }
    return values;
  });
let result = "";

for (let i = 0; i <= maxLineIndex; i++) {
  for (let j = 0; j < inputs.length; j++) {
    const element = inputs[j][i];
    if (element) {
      result += element;
    }
  }
}

console.log(result);
