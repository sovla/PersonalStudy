/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10814                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10814                          #+#        #+#      #+#    */
/*   Solved: 2025/03/01 11:53:22 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [N, ...members] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(
  members
    .sort((a, b) => {
      const aAge = +a.split(" ")[0];
      const bAge = +b.split(" ")[0];
      return aAge - bAge;
    })
    .join("\n")
);
