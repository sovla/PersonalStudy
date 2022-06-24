const string = "3 3 6";
const numbers = string.split(" ").map(Number);
const [a, b, c] = numbers;

if (a === b && b === c) {
  return 10000 + a * 1000;
} else if (a === b || b === c || a === c) {
  if (a === c) {
    return 1000 + a * 100;
  } else {
    return 1000 + b * 100;
  }
} else {
  const max = Math.max(...numbers);
  return max * 100;
}
