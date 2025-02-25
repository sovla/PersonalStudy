/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10871                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10871                          #+#        #+#      #+#    */
/*   Solved: 2025/02/25 10:58:39 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [meta, array] = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, X] = meta.split(" ").map(Number);
const numbers = array.split(" ").map(Number);

console.log(numbers.filter((v) => v < X).join(" "));
