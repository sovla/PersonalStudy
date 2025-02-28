/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 24267                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/24267                          #+#        #+#      #+#    */
/*   Solved: 2025/02/28 11:33:02 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const n = +fs.readFileSync("/dev/stdin").toString().trim();

// 조합 공식 사용: C(n,3) = n(n-1)(n-2)/6
// 코드1의 수행 횟수
const executionCount = (BigInt(n) * BigInt(n - 1) * BigInt(n - 2)) / BigInt(6);

console.log(executionCount.toString());

console.log(3);
