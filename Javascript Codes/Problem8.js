//Find the Factorial of a Number

const Fact = (n, result = 1) => {
  if (n === 0 || n === 1) return result;

  return Fact(n - 1, result * n);
};

console.log(Fact(4));
