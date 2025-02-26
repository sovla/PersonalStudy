/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 11653                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/11653                          #+#        #+#      #+#    */
/*   Solved: 2025/02/26 22:27:47 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
let N = +fs.readFileSync("/dev/stdin").toString().trim();

const result = [];
let index = 2;
while (N > 1) {
  if (N % index === 0) {
    result.push(index);
    N = N / index;
    index = 2;
  } else {
    index++;
  }
}

console.log(result.join("\n"));
