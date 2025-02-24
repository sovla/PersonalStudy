/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 25314                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/25314                          #+#        #+#      #+#    */
/*   Solved: 2025/02/24 22:06:30 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [count] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

let index = 0;
let result = "";
while (index < count / 4) {
  result = index === 0 ? "long int" : "long " + result;
  index++;
}
console.log(result);
