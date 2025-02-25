/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10988                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10988                          #+#        #+#      #+#    */
/*   Solved: 2025/02/25 21:40:13 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

for (let index = 0; index < input.length / 2; index++) {
  if (input[index] !== input[input.length - 1 - index]) {
    console.log(0);
    return;
  }
}

console.log(1);
