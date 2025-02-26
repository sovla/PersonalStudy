/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1978                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1978                           #+#        #+#      #+#    */
/*   Solved: 2025/02/26 21:59:57 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [_, numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let result = 0;
for (const element of numbers.split(" ").map(Number)) {
  const divisors = [];
  for (let index = 1; index <= element && divisors.length < 3; index++) {
    if (element % index === 0) {
      divisors.push(index);
    }
  }

  if (divisors.length === 2) {
    result++;
  }
}

console.log(result);
