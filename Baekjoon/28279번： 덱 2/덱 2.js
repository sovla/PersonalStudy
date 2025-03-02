/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 28279                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: sovla <boj.kr/u/sovla>                      +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/28279                          #+#        #+#      #+#    */
/*   Solved: 2025/03/02 19:25:33 by sovla         ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */

class Deque {
  constructor() {
    this.items = {}; // 요소들을 저장할 객체
    this.headIndex = 0; // 앞쪽 인덱스
    this.tailIndex = 0; // 뒷쪽 인덱스 (항상 마지막 요소의 다음 위치)
  }

  // 덱이 비어있는지 확인
  isEmpty() {
    return this.size() === 0;
  }

  // 덱의 크기를 반환
  size() {
    return this.tailIndex - this.headIndex;
  }

  // 뒤쪽(리어)에 요소 추가
  addBack(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  // 앞쪽(프론트)에 요소 추가
  addFront(item) {
    if (this.isEmpty()) {
      // 비어있다면 뒤에 추가하는 것과 동일하게 처리
      this.addBack(item);
    } else {
      // headIndex를 감소시키고 그 위치에 추가
      this.headIndex--;
      this.items[this.headIndex] = item;
    }
  }

  // 앞쪽 요소 제거 후 반환
  removeFront() {
    if (this.isEmpty()) return undefined;
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  // 뒤쪽 요소 제거 후 반환
  removeBack() {
    if (this.isEmpty()) return undefined;
    this.tailIndex--;
    const item = this.items[this.tailIndex];
    delete this.items[this.tailIndex];
    return item;
  }

  // 앞쪽 요소 확인(제거 없이)
  peekFront() {
    if (this.isEmpty()) return undefined;
    return this.items[this.headIndex];
  }

  // 뒤쪽 요소 확인(제거 없이)
  peekBack() {
    if (this.isEmpty()) return undefined;
    return this.items[this.tailIndex - 1];
  }
}

const deque = new Deque();

const fs = require("fs");
const [N, ...commands] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const results = [];
commands.forEach((v) => {
  const command = +v[0];
  const item = v.split(" ").map(Number)[1];
  switch (command) {
    case 1:
      deque.addFront(item);
      break;
    case 2:
      deque.addBack(item);
      break;
    case 3:
      results.push(deque.removeFront() ?? -1);
      break;
    case 4:
      results.push(deque.removeBack() ?? -1);
      break;
    case 5:
      results.push(deque.size());
      break;
    case 6:
      results.push(deque.isEmpty() ? 1 : 0);
      break;
    case 7:
      results.push(deque.peekFront() ?? -1);
      break;
    case 8:
      results.push(deque.peekBack() ?? -1);
      break;

    default:
      break;
  }
});

console.log(results.join("\n"));
