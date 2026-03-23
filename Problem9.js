/*

Given two integer arrays a[] and b[] containing two integers each representing the numerator and denominator of a fraction respectively. The task is to find the sum of the two fractions and return the numerator and denominator of the result.

Examples : 

    Input:  a = [1, 2] , b = [3, 2] 
    Output: [2, 1] 
    Explanation: 1/2 + 3/2 = 2/1

    Input:  a = [1, 3] , b = [3, 9] 
    Output: [2, 3] 
    Explanation: 1/3 + 3/9 = 2/3   

    Input:  a = [1, 5] , b = [3, 15] 
    Output: [2, 5] 
    Explanation: 1/5 + 3/15 = 2/5   


*/

const GCD = (a, b) => {
  if (b === 0) return a;

  return GCD(b, a % b);
};

const FindSum = (a, b) => {
  let num1 = a[0];
  let num2 = a[1];
  let den1 = b[0];
  let den2 = b[1];

  let LCM = (den1 * den2) / GCD(den1, den2);

  let numerator = num1 * (LCM / num2) + den1 * (LCM / den2);

  let commonFactor = GCD(numerator, LCM);

  LCM /= commonFactor;
  numerator /= commonFactor;

  return [numerator, LCM];
};

console.log(FindSum([1, 5], [3, 15]));
