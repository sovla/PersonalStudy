/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1931                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1931                           #+#        #+#      #+#    */
/*   Solved: 2025/03/14 16:43:15 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const [info, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = +info;

const meetings = [];

for (let i = 0; i < N; i++) {
  const [start, end] = numbers[i].split(" ").map(Number);
  meetings.push({ start, end });
}

meetings.sort((a, b) => {
  if (a.end === b.end) return a.start - b.start;
  return a.end - b.end;
});

let count = 1; // 첫 번째 회의는 무조건 선택
let end_time = meetings[0].end;

for (let i = 1; i < N; i++) {
  if (meetings[i].start >= end_time) {
    count++;
    end_time = meetings[i].end; // 끝나는 시간 갱신
  }
}

console.log(count); // 결과 출력
