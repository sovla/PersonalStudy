/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1085                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1085                           #+#        #+#      #+#    */
/*   Solved: 2025/02/26 22:38:18 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [x, y, w, h] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(
  Math.min(
    Math.abs(x - w),
    x + w,
    Math.abs(y - h),
    y + h,
    Math.abs(0 - x),
    Math.abs(0 - y)
  )
);
