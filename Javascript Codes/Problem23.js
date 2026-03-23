//Program to Print Pascal’s Triangle

const Pascal = (n) => {
  if (n === 0) return "Invalid Input";

  let triangle = [];

  for (let i = 0; i < n; i++) {
    let arr = [];

    for (let row = 0; row <= i; row++) {
      if (row === 0 || row === i) arr.push(1);
      else arr.push(triangle[i - 1][row - 1] + triangle[i - 1][row]);
    }

    triangle.push(arr);
  }

  return triangle;
};

const matrix = Pascal(5);

matrix.forEach((row) => console.log(row.join("")));
