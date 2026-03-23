/*


Fraction to Recurring Decimal
Last Updated : 07 Feb, 2025

Given two integers a and b(b != 0), the task is to return the fraction a/b in string format. If the fractional part is repeating, enclose the repeating part in parentheses.

Examples: 

    Input: a = 1, b = 2
    Output: “0.5”
    Explanation: 1/2 = 0.5 with no repeating part.

    Input: a = 50, b = 22
    Output: “2.(27)”
    Explanation: 50/22 = 2.27272727… Since fractional part (27) is repeating, it is enclosed in parentheses.


*/

const FracDecimal = (a, b) => {
  if (a % b === 0) return (a / b).toString();

  let result = "";

  if (Math.sign(a) !== Math.sign(b)) result += "-";

  a = Math.abs(a);
  b = Math.abs(b);

  result += Math.floor(a / b);
  result += ".";

  let rem = a % b;
  let map = {};

  while (rem !== 0) {
    if (map[rem] !== undefined) {
      let index = map[rem];
      result = result.slice(0, index) + "(" + result.slice(index) + ")";
      return result;
    }

    map[rem] = result.length;
    rem *= 10;
    result += Math.floor(rem / b);
    rem = rem % b;
  }

  return result;
};

console.log(FracDecimal(50, 22));
console.log(FracDecimal(1, 2));

/*

Here we write the same kind of algo which we usually use in our daily arithmatic division.

like when we want to find the exact result from a division then we used to multiply the remainder to 10; and then divide it again by the divisor.
The same concept is using in this algorithm.

We additionally using a map / Object just to track the remainder to find the repeating part.thats it.


*/
