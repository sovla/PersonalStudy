/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 24060                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/24060                          #+#        #+#      #+#    */
/*   Solved: 2025/03/04 14:01:00 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

const fs = require("fs");
const [info, numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = info.split(" ").map(Number);
const A = numbers.split(" ").map(Number);

let cnt = 0; // 저장 횟수
let answer = -1;

// 두 부분 배열을 병합하는 함수
function merge(arr, p, q, r) {
  let i = p;
  let j = q + 1;
  const tmp = [];

  while (i <= q && j <= r) {
    if (arr[i] <= arr[j]) {
      tmp.push(arr[i++]);
    } else {
      tmp.push(arr[j++]);
    }
  }
  while (i <= q) {
    tmp.push(arr[i++]);
  }
  while (j <= r) {
    tmp.push(arr[j++]);
  }

  // tmp의 값을 원래 배열에 저장하면서 저장 횟수를 카운트
  for (let t = 0; t < tmp.length; t++) {
    cnt++;
    arr[p + t] = tmp[t];
    if (cnt === K) {
      answer = arr[p + t];
    }
  }
}

// 병합 정렬 함수
function mergeSort(arr, p, r) {
  if (p < r) {
    const q = Math.floor((p + r) / 2);
    mergeSort(arr, p, q);
    mergeSort(arr, q + 1, r);
    merge(arr, p, q, r);
  }
}

mergeSort(A, 0, N - 1);
console.log(answer);
