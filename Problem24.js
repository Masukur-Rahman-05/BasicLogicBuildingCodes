const Divisors = (n) => {
  let divs = [];

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      divs.push(i);

      if (i !== n / i) divs.push(n / i);
    }
  }

  return divs.sort((a, b) => a - b).join(" ");
};
console.log(Divisors(100));
