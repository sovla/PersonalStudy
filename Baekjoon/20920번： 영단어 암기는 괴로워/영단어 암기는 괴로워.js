/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 20920                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/20920                          #+#        #+#      #+#    */
/*   Solved: 2025/03/02 22:40:13 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const map = new Map();

const fs = require("fs");
const [info, ...words] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = info.split(" ").map(Number);

words
  .filter((v) => M <= v.length)
  .sort()
  .forEach((v) => {
    map.set(v, (map.get(v) || 0) + 1);
  });

console.log(
  [...map.keys()]
    .sort((a, b) => {
      if (map.get(a) === map.get(b)) {
        if (b.length === a.length) {
          return a.localeCompare(b);
        } else {
          return b.length - a.length;
        }
      } else {
        return map.get(b) - map.get(a);
      }
    })
    .join("\n")
);
