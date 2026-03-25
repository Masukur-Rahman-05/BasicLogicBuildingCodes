# A number is a perfect number if it is equal to the sum of its proper divisors, that is, the sum of its positive divisors excluding the number itself. Find whether a given positive integer n is perfect or not.
# Examples: 

#     Input: n = 15
#     Output: false
#     Explanation: Divisors of 15 are 1, 3 and 5. Sum of divisors is 9 which is not equal to 15.

#     Input: n = 6
#     Output: true
#     Explanation: Divisors of 6 are 1, 2 and 3. Sum of divisors is 6.



def find_perfect_num(n):

    half = n//2
    sum = 1

    for i in range(2,half+1):
        if n % i == 0:
            sum += i

    if sum == n:
        return True
    else:
        return False
    
if __name__ == "__main__":
    print(find_perfect_num(6))
