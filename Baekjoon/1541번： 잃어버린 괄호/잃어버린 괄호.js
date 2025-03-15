/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1541                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1541                           #+#        #+#      #+#    */
/*   Solved: 2025/03/14 21:33:51 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const array = fs.readFileSync("/dev/stdin").toString().trim().split("-");

let result = array[0].split("+").reduce((acc, cur) => acc + Number(cur), 0);

for (let i = 1; i < array.length; i++) {
  const sum = array[i].split("+").reduce((acc, cur) => acc + Number(cur), 0);
  result -= sum;
}
console.log(result);
