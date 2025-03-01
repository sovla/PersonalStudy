/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 18870                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/18870                          #+#        #+#      #+#    */
/*   Solved: 2025/03/01 11:56:01 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [N, inputs] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numbers = inputs.split(" ").map(Number);

// 중복 제거 후 정렬
const sortedNumbers = [...new Set(numbers)].sort((a, b) => a - b);

const numMap = new Map();
sortedNumbers.forEach((v, i) => numMap.set(v, i));

console.log(numbers.map((v) => numMap.get(v)).join(" "));
