const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const MOD = 1000000007; // 해시 값 충돌 방지를 위한 큰 소수
const BASE = 31; // 일반적인 롤링 해시에서 사용되는 소수

const length = input.length;
const set = new Set();

for (let i = 0; i < length; i++) {
  let hash = 0;
  let power = 1; // BASE^j 값 계산을 위한 변수

  for (let j = i; j < length; j++) {
    hash = (hash * BASE + (input.charCodeAt(j) - 96)) % MOD;
    set.add(hash);
    power = (power * BASE) % MOD; // 다음 루프를 위한 BASE 증가
  }
}

console.log(set.size);
