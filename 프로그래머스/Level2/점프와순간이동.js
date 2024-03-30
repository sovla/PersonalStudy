function solution(n) {
  let ans = n;
  let count = 0;

  while (ans > 0) {
    if (ans % 2 === 0) {
      ans = ans / 2;
      continue;
    }
    ans = ans - 1;

    count++;
  }

  return count + 1;
}

solution(5);
console.log("------------------------");
solution(5000);
