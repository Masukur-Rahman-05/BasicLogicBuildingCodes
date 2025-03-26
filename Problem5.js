/*Find GCD or HCF of two Numbers*/

/*
const FindGCD = (a, b) => {
  let gcd = 1;

  for (let i = 1; i <= Math.min(a, b); i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }

  return gcd;
};

console.log(FindGCD(12, 15));

*/

const FindGCD = (a, b) => {
  if (b === 0) return a;

  return FindGCD(b, a % b);
};

console.log(FindGCD(12, 15));
