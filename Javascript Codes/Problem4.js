/*
Given n, count all ‘a’ and ‘b’ that satisfy the condition a^3 + b^3 = n. Where (a, b) and (b, a) are considered two different pairs

Examples: 

    Input: n = 9
    Output: 2
    Explanation: 1^3 + 2^3 = 9 and 2^3 + 1^3 = 9

    Input: n = 28
    Output: 2
    Explanation: 1^3 + 3^3 = 28 and 3^3 + 1^3 = 28

*/

const isSatisfied = (n) => {
  let count = 0;

  for (let i = 1; i <= Math.cbrt(n); i++) {
    for (let j = 1; j <= Math.cbrt(n); j++) {
      if (i * i * i + j * j * j === n) {
        console.log(i, j);
        count++;
      }
    }
  }

  return count;
};

console.log(isSatisfied(1729));
