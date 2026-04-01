# Given two numbers n and r, The task is to find the value of nCr . Combinations represent the number of ways to choose r elements from a set of n distinct elements, without regard to the order in which they are selected. The formula for calculating combinations is :
# Combinations

# Note: If r is greater than n, return 0.

# Examples

#     Input: n = 5, r = 2
#     Output: 10 
#     Explanation: The value of  5C2 is calculated as 5! / ((5−2)! * 2!​)= 10.

#     Input: n = 2, r = 4
#     Output: 0
#     Explanation: Since r is greater than n, thus 2C4 = 0

#     Input: n = 5, r = 0
#     Output: 1
#     Explanation:  The value of  5C0 is calculated as 5!/(5−0)!*0! = 5!/5!*0! = 1.

# nCr= n! / (r! * (n-r)!)

#............................................solution 1..........................................................

# import math

# def combination(n,r):

#     if r > n:
#         return 0
    
#     return math.factorial(n) // (math.factorial(r) * math.factorial(n-r))

# print(combination(5,2))

#.....................................................Solution 2 (Optimized).......................................................

#                           nCr​=r!n(n−1)(n−2)⋯(n−r+1)​/r!

def combination(n,r):
    if r > n:
        return 0
    
    r = min(r,n-r)

    res = 1
    for i in range(1,r+1):
        res *= (n-i+1) // i

    return res

print(combination(5,3))