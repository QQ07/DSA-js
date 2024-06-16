// function to check if the given string is palindrome or not.
/**
 * @param {string} str
 * @return {boolean}
 */
function isPalin(str) {
  let revStr = str.split("").reverse().join("");
  if (str === revStr) return true;
  return false;
}
/**
 * @param {string} str
 * @return {boolean}
 */
function recursiveIsPalin(str) {
  if (str.length == 1) return true;
  if (str.length == 2) return str[1] == str[2];
  let rem = recursiveIsPalin(str.slice(1, str.length - 1));
  if (rem == false) return false;
  return str[0] == str[str.length - 1];
}

console.log(recursiveIsPalin("aabaaa"))
