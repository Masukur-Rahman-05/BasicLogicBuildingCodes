# Given two positive integers a and b, the task is to find the GCD of the two numbers.

# Note: The GCD (Greatest Common Divisor) or HCF (Highest Common Factor) of two numbers is the largest number that divides both of them. 
# gcd

# Examples:

#     Input: a = 20, b = 28
#     Output: 4
#     Explanation: The factors of 20 are 1, 2, 4, 5, 10 and 20. The factors of 28 are 1, 2, 4, 7, 14 and 28. Among these factors, 1, 2 and 4 are the common factors of both 20 and 28. The greatest among the common factors is 4.

#     Input: a = 60, b = 36
#     Output: 12
#     Explanation: GCD of  60 and 36 is 12.

#...................................................Solution 1 ...................................................
# def gcd(a,b):

#     if a == 0 or b == 0:
#         return max(a,b)
    
#     result = min(a,b)

#     while result > 0:
#         if a % result == 0 and b % result == 0:
#             break
#         result -= 1

#     return result

# if __name__ == "__main__":
#     print(gcd(60,36))


#.............................................Solution 2.....................................................
# import math

# def find_gcd(a,b):

#     return math.gcd(a,b)

# if __name__ == "__main__":
#     print(find_gcd(60,36))


#..............................................Solution 3 (Much faster).............................

def find_gcd(a,b):
    if b == 0:
        return a
    
    return find_gcd(b,a%b)

if __name__ == "__main__":
    print(find_gcd(36,60))