/*

Given two numbers n and r, The task is to find the value of nCr . Combinations represent the number of ways to choose r elements from a set of n distinct elements, without regard to the order in which they are selected. The formula for calculating combinations is :
Combinations

Combinations Formula

Examples

    Input: n = 5, r = 2
    Output: 10 
    Explanation: The value of  5C2 is calculated as 5! / (5−2)! * 2!​ = 10.

    Input: n = 2, r = 4
    Output: 0
    Explanation: Since r is greater than n, thus 2C4 = 0

    Input: n = 5, r = 0
    Output: 1
    Explanation:  The value of  5C0 is calculated as 5!/(5−0)!*0! = 5!/5!*0! = 1.

*/

const Fact = (num, result = 1) => {
  if (num === 0 || num === 1) return result;

  return Fact(num - 1, result * num);
};

const Combination = (n, r) => {
  return Fact(n) / (Fact(r) * Fact(n - r));
};

console.log(Permutation(5, 2));
