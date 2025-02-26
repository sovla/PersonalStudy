/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 9506                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/9506                           #+#        #+#      #+#    */
/*   Solved: 2025/02/26 21:55:03 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const inputs = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .filter((v) => v !== -1);

const result = [];
for (const input of inputs) {
  const divisors = [];

  for (let index = 1; index <= input / 2; index++) {
    if (input % index === 0) {
      divisors.push(index);
    }
  }
  const total = divisors.reduce((prev, curr) => prev + curr, 0);
  result.push(
    total !== input
      ? `${input} is NOT perfect.`
      : `${input} = ${divisors.join(" + ")}`
  );
}

console.log(result.join("\n"));
