/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 18258                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/18258                          #+#        #+#      #+#    */
/*   Solved: 2025/03/02 11:18:17 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

class Queue {
  constructor() {
    this.items = [];
    this.head = 0; // 큐의 시작 인덱스
    this.tail = 0; // 큐의 끝 인덱스
  }

  push(n) {
    this.items[this.tail++] = n;
  }

  pop() {
    if (this.head === this.tail) return -1;
    return this.items[this.head++];
  }

  size() {
    return this.tail - this.head;
  }

  empty() {
    return this.head === this.tail ? 1 : 0;
  }

  front() {
    return this.head === this.tail ? -1 : this.items[this.head];
  }

  back() {
    return this.head === this.tail ? -1 : this.items[this.tail - 1];
  }
}

const fs = require("fs");
const [N, ...commands] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const queue = new Queue();

const results = [];

commands.forEach((v) => {
  const command = v.split(" ")[0];

  if (command === "push") {
    queue[command](+v.split(" ")[1]);
  } else {
    results.push(queue[command]());
  }
});

console.log(results.join("\n"));
