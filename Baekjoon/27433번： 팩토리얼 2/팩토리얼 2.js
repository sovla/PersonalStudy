/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 27433                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/27433                          #+#        #+#      #+#    */
/*   Solved: 2025/03/02 23:00:36 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim().split(" ")[0];

const factorial = (n) => (n > 1 ? factorial(n - 1) * n : 1);

console.log(factorial(input));
