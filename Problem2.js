/*

Given an Integer n, find the reverse of its digits.

Examples:  

    Input: n = 122
    Output: 221
    Explanation: By reversing the digits of number, number will change into 221.

    Input: n = 200
    Output: 2
    Explanation: By reversing the digits of number, number will change into 2.

    Input: n = 12345 
    Output: 54321
    Explanation: By reversing the digits of number, number will change into 54321.

*/

function ReverseNum(n) {
  let reverse = 0;
  while (n > 0) {
    let last = n % 10;

    reverse = reverse * 10 + last;

    n = Math.floor(n / 10);
  }
  return reverse;
}

console.log(ReverseNum(100));
