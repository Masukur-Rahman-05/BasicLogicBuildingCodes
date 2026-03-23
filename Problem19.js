/*
Given a number, the task is to check if a number is divisible by 4 or not. The input number may be large and it may not be possible to store even if we use long long int.

Examples:

    Input : n = 1124
    Output : Yes

    Input  : n = 1234567589333862
    Output : No

    Input  : n = 363588395960667043875487
    Output : No


*/

const DivFour = (num) => {
  let n = num.toString();

  if (n.length > 0) {
    n = Number(n.slice(-2));
    if (n % 4 === 0) return true;
  }

  return false;
};

console.log(DivFour("165676726836782347827347"));

/*


Optimized Approach (Handles Large Numbers)

Instead of storing the entire number, just check the last two digits.
🔹 Steps:

1️⃣ Take only the last two digits of the number.
2️⃣ Convert them to an integer.
3️⃣ Check if that 2-digit number is divisible by 4.

*/
