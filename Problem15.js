const isArmstrong = (n) => {
  let len = 0;
  let temp1 = n;
  let temp2 = n;

  while (temp1 > 0) {
    temp1 = Math.floor(temp1 / 10);
    len++;
  }

  let sum = 0;

  while (temp2 > 0) {
    let reminder = temp2 % 10;
    sum += Math.pow(reminder, len);
    temp2 = Math.floor(temp2 / 10);
  }

  return sum === n;
};

console.log(isArmstrong(152));
