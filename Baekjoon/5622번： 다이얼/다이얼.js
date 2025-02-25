/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 5622                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/5622                           #+#        #+#      #+#    */
/*   Solved: 2025/02/25 21:10:13 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const dial = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("");

let result = 0;
input.forEach((v) => {
  Object.entries(dial).forEach(([dialNumber, value]) => {
    if (dialNumber.includes(v)) {
      result += value;
    }
  });
});
console.log(result);
