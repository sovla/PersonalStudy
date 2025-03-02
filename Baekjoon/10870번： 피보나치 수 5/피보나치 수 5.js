/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10870                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10870                          #+#        #+#      #+#    */
/*   Solved: 2025/03/02 23:01:56 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const input = +fs.readFileSync("/dev/stdin").toString().trim().split(" ")[0];

const fibonacci = (n) => (n >= 2 ? fibonacci(n - 1) + fibonacci(n - 2) : n);

console.log(fibonacci(input));
