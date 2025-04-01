/*
Given a number n, print all numbers in the range from 1 to n having exactly 3 divisors. 

Examples: 

    Input: n = 16
    Output: 4 9
    Explanation: 4 and 9 have exactly three divisors.

    Input: n = 49
    Output: 4 9 25 49
    Explanation: 4, 9, 25 and 49 have exactly three divisors.


*/

const Divisor = (n) => {
  let result = [];

  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }

    return true;
  };

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (isPrime(i)) {
      let square = i * i;

      if (square <= n) {
        result.push(square);
      }
    }
  }

  return result.join(" ");
};

console.log(Divisor(16));

/*


A number has exactly 3 divisors if and only if it is a square of a prime number.
Why?

    Consider a number x. The number of divisors of x depends on its prime factorization.

    Normally, a number x has more than 3 divisors unless it has a very special form.

    If a number x has exactly 3 divisors, it means its divisors are:
    1,p,p2
    1,p,p2

    where p is a prime number.

Example:

    4=224=22 → divisors: {1, 2, 4} → 3 divisors

    9=329=32 → divisors: {1, 3, 9} → 3 divisors

    25=5225=52 → divisors: {1, 5, 25} → 3 divisors

    49=7249=72 → divisors: {1, 7, 49} → 3 divisors

For any number p2p2, its divisors are {1, p, p^2}.
Since it has exactly three divisors, we conclude that:

    The number must be a square.

    The square root must be a prime number.

2️⃣ Approach to Solve This Problem

We need to find numbers from 1 to n that have exactly three divisors.
From our observation, this means finding squares of prime numbers.
Steps to Solve:

    Find all prime numbers up to nn

​.

    If p is prime, then p^2 will be a valid number with exactly 3 divisors.

Compute the square of each prime number.

If the square is ≤ n, add it to the result.

Print all valid numbers.

*/

/*

The square of every prime number has exactly 3 divisors, and this is true for all prime numbers.
Mathematical Proof

Let’s take a prime number p and compute its divisors.

    A prime number p has exactly two divisors:
    1,p
    1,p

    If we take its square, p², its divisors will be:
    1,p,p2
    1,p,p2

    Since these are the only numbers that divide p2p2 exactly, it means p2p2 has exactly three divisors.

Thus, for any prime number pp, its square p2p2 always has exactly 3 divisors.

*/
