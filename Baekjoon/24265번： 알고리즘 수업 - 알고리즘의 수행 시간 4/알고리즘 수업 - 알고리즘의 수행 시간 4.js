/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 24265                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/24265                          #+#        #+#      #+#    */
/*   Solved: 2025/02/28 10:55:18 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim();

const executionCount = (input * (input - 1)) / 2;

console.log(executionCount);
console.log(2);
