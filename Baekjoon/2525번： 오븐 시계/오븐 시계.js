/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2525                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2525                           #+#        #+#      #+#    */
/*   Solved: 2025/02/24 21:32:03 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const [date, timer] = fs.readFileSync("/dev/stdin").toString().split("\n");

const [hour, minute] = date.split(" ").map(Number);

const calculateMinute = hour * 60 + minute + +timer;
const result =
  calculateMinute >= 1440 ? calculateMinute - 1440 : calculateMinute;

console.log(`${Math.floor(result / 60)} ${result % 60}`);
