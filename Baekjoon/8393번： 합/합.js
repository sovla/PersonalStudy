/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 8393                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/8393                           #+#        #+#      #+#    */
/*   Solved: 2025/02/24 22:00:52 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [count] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

let result = 0;
for (let index = 0; index <= count; index++) {
  result += index;
}

console.log(result);
