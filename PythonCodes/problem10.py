# A number is a perfect number if it is equal to the sum of its proper divisors, that is, the sum of its positive divisors excluding the number itself. Find whether a given positive integer n is perfect or not.
# Examples: 

#     Input: n = 15
#     Output: false
#     Explanation: Divisors of 15 are 1, 3 and 5. Sum of divisors is 9 which is not equal to 15.

#     Input: n = 6
#     Output: true
#     Explanation: Divisors of 6 are 1, 2 and 3. Sum of divisors is 6.


# ...............................................Solution 1 (Brute Force)........................................

# def find_perfect_num(n):

#     half = n//2
#     sum = 1

#     for i in range(2,half+1):
#         if n % i == 0:
#             sum += i

#     if sum == n:
#         return True
#     else:
#         return False
    
# if __name__ == "__main__":
#     print(find_perfect_num(6))

#..................................................Solution 2 (Optimized)............................................

def find_perfect_num(n):

    if n <= 1:
        return False
    
    total = 1
    i = 2

    while i*i <= n:

        if n % i == 0:
            total += i

            if i != n//i:
                total += n//i
        
        i+=1

    if total == n:
        return True
    else:
        return False
    
if __name__ == "__main__":
    print(find_perfect_num(6))