/**
 * @param {number} n
 * @param {*} memo
 * @returns {number}
 */
function fibMemo(n, memo = {}) {
  if (n <= 1) return n;
  return fibMemo(n, {});
}
