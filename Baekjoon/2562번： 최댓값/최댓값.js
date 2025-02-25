/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2562                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2562                           #+#        #+#      #+#    */
/*   Solved: 2025/02/25 11:07:45 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const inputs = fs.readFileSync("/dev/stdin").toString().split("\n").map(Number);

console.log(Math.max(...inputs));
console.log(inputs.indexOf(Math.max(...inputs)) + 1);
