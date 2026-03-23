/*

Given two integers n and m (m != 0). Find the number closest to n and divisible by m. If there is more than one such number, then output the one having maximum absolute value.

Examples: 

    Input: n = 13, m = 4
    Output: 12
    Explanation: 12 is the closest to 13, divisible by 4.

    Input: n = -15, m = 6
    Output: -18
    Explanation: Both -12 and -18 are closest to -15, but-18 has the maximum absolute value.


*/

function closestDiv(n, m) {
  if (m == null) {
    throw new Error("You must give a second argument (second>first)");
  }

  if (n === 0 || m === 0) {
    throw new Error("Second Argument shouldn't be Zero");
  }

  if (Math.abs(n) < Math.abs(m)) {
    return 0;
  }

  let result = parseInt(n / m);
  let first = m * result;

  let second = first + m * Math.sign(n);

  console.log(first, second);

  if (Math.abs(n - first) === Math.abs(n - second)) {
    return Math.abs(first) > Math.abs(second) ? first : second;
  }

  return Math.abs(n - first) < Math.abs(n - second) ? first : second;
}

console.log(closestDiv(12, 3));
