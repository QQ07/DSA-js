// sum of numbers 1 to N

function sumtill(n) {
  if (n == 1) return 1;
  return n + sumtill(n - 1);
}

console.log(sumtill(100));
