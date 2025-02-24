/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2884                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2884                           #+#        #+#      #+#    */
/*   Solved: 2025/02/24 21:24:19 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [H, M] = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

const DayMinute = 1440;

const calculateMinute = H * 60 + M;
const result = calculateMinute - 45;

const resultMinute = result < 0 ? DayMinute + result : result;
console.log(`${Math.floor(resultMinute / 60)} ${resultMinute % 60}`);
