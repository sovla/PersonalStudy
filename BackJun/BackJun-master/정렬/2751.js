const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "win32" ? "input.txt" : "dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
console.log(selectionSrot(input.splice(1, input[0] + 1)));

function bubbleSort(arr) {
  let temp = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] > arr[j]) {
        temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
}
//  10 bubble 8.722s

function selectionSrot(arr) {
  let temp = 0,
    indexMin = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexMin]) {
        indexMin = j;
      }
    }
    temp = arr[indexMin];
    arr[indexMin] = arr[i];
    arr[i] = temp;
  }
}
//  10 selection 4.719s

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let prev = i - 1;
    while (prev >= 0 && arr[prev] > temp) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = temp;
  }
}

//  10 insertion 2.030s
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pp = Math.floor(arr.length / 2),
    pivot = arr[pp];
  const left = [],
    right = [];
  for (var i = 0; i < arr.length; i++) {
    if (i == pp) continue;
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}
