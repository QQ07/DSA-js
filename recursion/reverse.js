//Reverse a string
//iterative

function reverse(string) {
  let rev = "";
  let n = string.length - 1;

  while (n >= 0) {
    rev += string[n];
    n--;
  }
  return rev;
}

//recursive
function rreverse(string) {
  console.log(string);
  if (string.length == 0) return string;
  let n = string.length;
  return rreverse(string.slice(1, n)) + string[0];

  let rev = rreverse(string.slice(1, n));

    console.log(`reversing: ${rev} + ${string[0]} `)

  return rev + string[0];
}

console.log(rreverse("rohan"));
