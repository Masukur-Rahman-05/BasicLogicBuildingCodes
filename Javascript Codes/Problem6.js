//Find LCM of two numbers

const FindGCD = (a, b) => {
  if (b === 0) return a;

  return FindGCD(b, a % b);
};

const FindLCM = (a, b) => {
  return Math.abs(a * b) / FindGCD(a, b);
};

console.log(FindLCM(12, 18));
