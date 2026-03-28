# Given a positive integer n, find its square root. If n is not a perfect square, then return floor of √n.

# Examples : 

#     Input: n = 4
#     Output: 2
#     Explanation: The square root of 4 is 2.

#     Input: n = 11
#     Output: 3
#     Explanation: The square root of 11 lies in between 3 and 4 so floor of the square root is 3.


# .......................................................Solution 1.......................................................
# def square_root(n):

#     low = 1
#     high = n
#     result = 1

#     while low <= high:
#         mid = (low + high) // 2
        
#         if mid * mid <= n:
#             result = mid
#             low = mid + 1

#         else:
#             high = mid - 1

#     return result

# if __name__ == "__main__":
#     print(square_root(11))


#.......................................................Solution 2............................................................
# Let's say square root of n is x:
# => x = √n
# Squaring both the sides:
# => x2 =n
# Taking log on both the sides:
# => log(x2) = log(n)
# => 2 × log(x) = log(n)
# => log(x) = 1/2 × log(n)
# To isolate x, exponentiate both sides with base e:
# => x = e1/2 * log(n)
# x is the square root of n:
# So, √n = e1/2 × log(n)

import math

def square_root(n):

    return int(math.exp(0.5 * math.log(n)))

if __name__ == "__main__":
    print(square_root(11))
