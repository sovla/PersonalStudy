let set = new Set();

let n = 1;
while (n <= 10000) {
    let a = n;
    let count = 0;

    while (a > 9) {
        count += a % 10;
        a = parseInt(a / 10);
    }
    set.add(a + n + count);
    n++;
}

n = 1;
while (n <= 10000) {
    if (!set.has(n)) console.log(n);
    n++;
}
