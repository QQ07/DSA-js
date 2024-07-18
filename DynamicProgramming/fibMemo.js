/**
 * @param {number} n
 * @param {*} memo
 * @returns {number}
 */
function fibMemo(n, memo = {}) {
  if (memo[n]) return memo[n];
  if (n <= 1) return n;
  
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n-2, memo);
  return memo[n]
}

console.log(fibMemo(7))