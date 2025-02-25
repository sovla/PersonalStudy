/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10807                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10807                          #+#        #+#      #+#    */
/*   Solved: 2025/02/25 10:28:59 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [N, numbers, value] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

const splitNumbers = numbers.split(" ").map(Number);
console.log(splitNumbers.filter((v) => +value === v).length);
