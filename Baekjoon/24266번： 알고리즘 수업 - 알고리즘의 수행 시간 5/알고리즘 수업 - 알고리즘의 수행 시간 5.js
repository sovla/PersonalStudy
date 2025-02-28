/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 24266                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/24266                          #+#        #+#      #+#    */
/*   Solved: 2025/02/28 11:28:40 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const input = BigInt(
  fs.readFileSync("/dev/stdin").toString().trim().split(" ")[0]
);
console.log(`${input * input * input}`);
console.log(3);
