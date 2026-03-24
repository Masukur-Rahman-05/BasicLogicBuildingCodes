# Given two positive integers a and b. Find the Least Common Multiple (LCM) of a and b.
# LCM of two numbers is the smallest number which can be divided by both numbers. 

#     Input :  a = 10, b = 5
#     Output :  10
#     Explanation : 10 is the smallest number divisible by both 10 and 5

#     Input :  a = 5, b = 11
#     Output :  55
#     Explanation : 55 is the smallest number divisible by both 5 and 11


#...................................................Solution 1 (O(a*b))...................................................
# def find_lcm(a,b):

#     result = max(a,b)

#     while True:
#         if result % a == 0 and result % b == 0:
#             return result
#         result += 1

# if __name__ == "__main__":
#     print(find_lcm(12,18))

#.....................................................Solution  2 (GCD Formula)...................................................

def find_gcd(a,b):
    if b == 0:
        return a
    return find_gcd(b,a%b)

def find_lcm(a,b):
    return (a*b)//find_gcd(a,b)

if __name__ == "__main__":
    print(find_lcm(12,18))


#......................................................Solution 3 (Builtin math.lcm)....................................................
# import math

# def find_lcm(a,b):
#     return math.lcm(a,b)

# if  __name__ == "__main__":
#     print(find_lcm(12,18))