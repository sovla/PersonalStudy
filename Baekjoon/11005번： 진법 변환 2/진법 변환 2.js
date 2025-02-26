/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 11005                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/11005                          #+#        #+#      #+#    */
/*   Solved: 2025/02/26 08:19:39 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

console.log(parseInt(input[0], 10).toString(+input[1]).toUpperCase());
