/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 3009                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/3009                           #+#        #+#      #+#    */
/*   Solved: 2025/02/26 22:42:01 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const x = [];
const y = [];

inputs.forEach((v) => {
  const input = v.split(" ").map(Number);

  x.push(input[0]);
  y.push(input[1]);
});

const result = x.find(
  (value) => x.filter((value2) => value2 === value).length === 1
);
const result1 = y.find(
  (value) => y.filter((value2) => value2 === value).length === 1
);
console.log(`${result} ${result1}`);
