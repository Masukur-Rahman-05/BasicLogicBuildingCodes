//Find whether the number is a Perfect Number or not.

const isPerfect = (n) => {
  let sum = 1;

  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      sum += i;
      if (i !== n / i) {
        sum += n / i;
      }
    }
  }

  return sum === n;
};

console.log(isPerfect(6));
