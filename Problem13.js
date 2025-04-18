/*
Given a positive integer n, the task is to find the nth Fibonacci number.

The Fibonacci sequence is a sequence where the next term is the sum of the previous two terms. The first two terms of the Fibonacci sequence are 0 followed by 1. The Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21

Example:

    Input: n = 2
    Output: 1 
    Explanation: 1 is the 2nd number of Fibonacci series.

    Input: n = 5
    Output: 5
    Explanation: 5 is the 5th number of Fibonacci series.

*/

const FindFibo = (n) => {
  if (n === 1) return 0;
  if (n === 2) return 1;

  let result = [0, 1];

  for (let i = 2; i <= n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  console.log(result); //I wrote it for Debugging
  return result[n];
};

console.log(FindFibo(5));
