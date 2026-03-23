/*

The digital root of a positive integer is found by summing the digits of the integer. If the resulting value is a single digit then that digit is the digital root. If the resulting value contains two or more digits, those digits are summed and the process is repeated. This is continued as long as necessary to obtain a single digit.
Given a number, the task is to find its digital root. The input number may be large and it may not be possible to store even if we use long long int.
Examples :

    Input : num = “1234”
    Output : 1
    Explanation : The sum of 1+2+3+4 = 10, digSum(x) == 10,Hence ans will be 1+0 = 1
    Input : num = “5674”
    Output : 4 



*/

const FindDigitRoot = (n) => {
  let sum = 0;

  if (n === 0) return 0;

  if (n % 9 === 0) return 9;

  return n % 9;
};

console.log(FindDigitRoot(1234));
console.log(FindDigitRoot(5674));

/*

This code is based on a mathematical property of numbers called modulo 9 congruence, which helps in finding the digital root efficiently.

Case 1: When n = 0

    The digital root of 0 is just 0.

Case 2: When n is a multiple of 9

    The sum of the digits of any multiple of 9 always results in 9 (unless it's 0).

    Example: 9, 18, 27, 36, 45, 54, ...

    Since n % 9 === 0 in these cases, return 9.

Case 3: Otherwise, return n % 9

    Any number that is not a multiple of 9 has a digital root equal to n % 9.

    Example:

        1234 % 9 = 1 (because 1 + 2 + 3 + 4 = 10, and 10 % 9 = 1)

        5674 % 9 = 4 (because 5 + 6 + 7 + 4 = 22, and 22 % 9 = 4)

*/
