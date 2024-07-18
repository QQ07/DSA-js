function fib(a, b, n, curr = 0) {
  if (curr == 0) {
    console.log(0);
    console.log(1);
    curr = 3;
  }
  if (n <= curr) return;
  console.log(a + b);
  fib(b, a + b, n, curr + 1);
}

// fib(0, 1, 10);

//Different Approach
let res = new Set();
function fibb(n) {
  if (n == 0) {
    // console.log(0);
    res.add(0);
    return 0;
  }
  if (n == 1) {
    // console.log(1);
    res.add(1);
    return 1;
  }

  let ans = fibb(n - 1) + fibb(n - 2);
  //   console.log(ans);
  res.add(ans);
  return ans;
}

// fibb(10);
// res.forEach((e) => console.log(e));

function fibbb(n) {
  if (n <= 1) return n;
  return fibbb(n - 1) + fibbb(n - 2);
}

console.log(fibbb(7))
