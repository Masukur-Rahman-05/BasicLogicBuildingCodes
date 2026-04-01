# Given two numbers, n and r, the task is to compute nPr, which represents the number of ways to arrange r elements from a set of n elements. It is calculated using the formula n!/(n−r)!, where "!" denotes the factorial operation.
# Permutation - Formula, Definition ...

# Examples:

#     Input: n = 5
#                r = 2
#     Output: 20
#     Explanation: 5P2 = 5! / (5 - 2)!  = 20

#     Input: n = 6
#                r = 3
#     Output: 120
#     Explanation: 6P3 = 6! / (6 - 3)!  = 120

# nPr= n! / (n-r)!

#.........................................................Solution 1....................................................
# import math

# def permutation(n,r):

#     if r > n:
#         return 0
    
#     return math.factorial(n) // math.factorial(n-r)

# print(permutation(6,3))


#............................................................Solution 2 (Optimized O(r))....................................................................

# Instead of computing full factorials, multiply only required terms.

#                                   nPr=n×(n−1)×...×(n−r+1)

# def permutation(n,r):
#     if r>n:
#         return 0
    
#     res = 1
#     for i in range(r):
#         res *= (n-i)
#     return res

# print(permutation(6,3))

#........................................more Optimized solution.....................................................................

def permutation(n,r):
    if r>n:
        return 0
    
    r = min(r,n-r)
    res = 1
    for i in range(r):
        res *= (n-i)
    return res

print(permutation(6,3))