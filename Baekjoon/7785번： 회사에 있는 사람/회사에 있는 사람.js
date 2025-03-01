/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 7785                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/7785                           #+#        #+#      #+#    */
/*   Solved: 2025/03/01 13:14:01 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [N, ...employees] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const records = {};

employees.forEach((v) => {
  const [name, commute] = v.split(" ");

  if (commute === "leave") {
    delete records[name];
  } else {
    records[name] = commute;
  }
});

console.log(Object.keys(records).sort().reverse().join("\n"));
