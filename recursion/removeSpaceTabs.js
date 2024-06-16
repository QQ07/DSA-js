// to remove "\t" and " " from the string

/**
 *
 * @param {string} str
 * @returns {string}
 */
function removeTAS(str) {
  // str = str.split(" ").join("")
  // str = str.split("\t").join("")
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char != " " && char != "\t") result += char;
  }
  return result;
}

/**
 *
 * @param {string} str
 * @returns {string}
 */
function rRemoveTAS(str) {
  if (str.length == 0) return "";
  if (str[0] != "\t" && str[0] != " ") return str[0] + rRemoveTAS(str.slice(1));
  return rRemoveTAS(str.slice(1));
}

console.log(rRemoveTAS("Hello my name is\tRohan"));
