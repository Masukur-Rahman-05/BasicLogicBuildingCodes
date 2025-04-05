/*

Given two numbers, n and r, the task is to compute nPr, which represents the number of ways to arrange r elements from a set of n elements. It is calculated using the formula n!/(n−r)!, where “!” denotes the factorial operation.

    nPr = n! / (n – r)! 

Examples:

    Input: n = 5
               r = 2
    Output: 20
    Explanation: 5P2 = 5! / (5 – 2)!  = 20

    Input: n = 6
               r = 3
    Output: 120
    Explanation: 6P3 = 6! / (6 – 3)!  = 120

*/

const Fact = (num, result = 1) => {
  if (num === 0 || num === 1) return result;

  return Fact(num - 1, result * num);
};

const Permutation = (n, r) => {
  return Fact(n) / Fact(n - r);
};

console.log(Permutation(5, 2));
