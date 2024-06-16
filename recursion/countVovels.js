//count vowels in a string

function isVowel(char) {
  console.log("checking isVowel ", char);
  let lowerChar = char.toLowerCase();
  let vowels = "aeiou";
  if (vowels.indexOf(lowerChar) != -1) return true;
  else return false;
}

function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i])) count++;
  }
  return count;
}
// console.log(countVowels("My name is Rohan"));

function recursiveCountVowels(string, len) {
    console.log(`counting vowels in ${string.slice(0,len)}`)
  if (len == 1) return Number(isVowel(string[0]));

  return recursiveCountVowels(string, len - 1) + isVowel(string[len - 1]);
}

console.log(
  recursiveCountVowels("Rohan", "Rohan".length)
);
