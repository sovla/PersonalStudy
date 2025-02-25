/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10818                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10818                          #+#        #+#      #+#    */
/*   Solved: 2025/02/25 11:04:52 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [N, numbers] = fs.readFileSync("/dev/stdin").toString().split("\n");

const result = numbers.split(" ").map(Number);

console.log(Math.min(...result) + " " + Math.max(...result));
