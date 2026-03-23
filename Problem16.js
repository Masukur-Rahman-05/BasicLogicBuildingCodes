//Find the number Palindrome or not

const isPalindrome = (n) => {
  const numStr = n.toString();
  let len = numStr.length;

  for (let i = 0; i < Math.ceil(len / 2); i++) {
    if (numStr[i] !== numStr[len - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(121));
