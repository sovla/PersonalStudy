/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2941                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2941                           #+#        #+#      #+#    */
/*   Solved: 2025/02/25 22:00:23 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const croatiaAlphabet = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (const v of croatiaAlphabet) {
  input = input.split(v).join("!");
}

console.log(input.split("").length);
