/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function GCD(a, b) {
  let factors = new Set();
  let gcd = 1;
  for (let i = 2; i <= a; i++) {
    if (a % i == 0) factors.add(i);
  }

  for (let i = 2; i <= b; i++) {
    if (b % i == 0)
      if (factors.has(i)) {
        gcd = i;
      }
  }
  return gcd;
}
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function Rgcd(a, b) {
  if (a == b) return a;
  if (b > a) return Rgcd(b - a, a);
  return Rgcd(a - b, b);
}

console.log(Rgcd(56, 42));
