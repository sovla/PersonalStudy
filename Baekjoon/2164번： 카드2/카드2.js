/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 2164                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/2164                           #+#        #+#      #+#    */
/*   Solved: 2025/03/02 11:28:36 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require("fs");
const N = +fs.readFileSync("/dev/stdin").toString().trim();

class Queue {
  constructor(n) {
    this.items = Array.from(
      {
        length: n,
      },
      (_, i) => i + 1
    );
    this.head = 0; // 큐의 시작 인덱스
    this.tail = this.items.length; // 큐의 끝 인덱스
  }

  push(n) {
    this.items.push(n);
    this.tail++;
  }

  pop() {
    return this.items[this.head++];
  }
  size() {
    return this.tail - this.head;
  }
  r() {
    this.push(this.items[this.head++]);
  }
}
const queue = new Queue(N);

while (queue.size() !== 1) {
  queue.pop();

  queue.r();
}

console.log(queue.pop());
