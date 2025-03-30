//Generate Fibonacci Series of a Given Number

/*
const Fibo = (n) => {

  let result = [0, 1];

  if (n === 1) return 0;
  if (n === 2) return result;

  for (let i = 2; i < n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }

  return result;

  //Time Complexity = O(n)
  //Space Complexity = O(n)
};

console.log(Fibo(10))

*/

const Fibo = (n) => {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  let a = 0;
  let b = 1;
  let temp;
  let result = [a, b];

  for (let i = 2; i < n; i++) {
    temp = a + b;
    a = b;
    b = temp;

    result.push(b);
  }

  return result;

  //This approach is more efficient for memory. Time complexity O(n). Space Complexity is O(1)
};

console.log(Fibo(3));
console.log(Fibo(5));
console.log(Fibo(10));
