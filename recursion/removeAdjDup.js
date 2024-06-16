// To remove adjacent duplicates
// let s= "aabcc"

// console.log(s.slice(0,1))
// console.log(s.slice(1))
// console.log(s.slice(2))

function removeAdjDup(inputString) {
  let result = "";
  //   console.log(inputString.length)
  for (let i = 0; i < inputString.length; i++) {
    console.log(i);
    if (i === inputString.length - 1 || inputString[i] != inputString[i + 1]) {
      result += inputString[i];
    }
  }
  return result;
}
function rRAD(inputString) {
  if (inputString.length === 1) return inputString;
  let rem = rRAD(inputString.slice(1));
  if (rem[0] === inputString[0]) return rem.slice(1);
  return inputString[0] + rem;
}
console.log(rRAD("{{[]]}}"));
