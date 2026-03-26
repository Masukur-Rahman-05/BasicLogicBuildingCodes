# Given two integer arrays a[] and b[] containing two integers each representing the numerator and denominator of a fraction respectively. 
# The task is to find the sum of the two fractions and return the numerator and denominator of the result.

# Examples : 

#     Input:  a = [1, 2] , b = [3, 2] 
#     Output: [2, 1] 
#     Explanation: 1/2 + 3/2 = 2/1

#     Input:  a = [1, 3] , b = [3, 9] 
#     Output: [2, 3] 
#     Explanation: 1/3 + 3/9 = 2/3   

#     Input:  a = [1, 5] , b = [3, 15] 
#     Output: [2, 5] 
#     Explanation: 1/5 + 3/15 = 2/5   

#...............................................................Solution 1........................................................
# import math

# def find_add(first:list,second:list):

#     numerator_first = first[0]
#     denominator_first = first[1]

#     numerator_second = second[0]
#     denominator_second = second[1]

#     denominator_result = math.lcm(denominator_first,denominator_second)

#     numerator_result = (numerator_first * (denominator_result // denominator_first)) + (numerator_second * (denominator_result//denominator_second))

#     gcd = math.gcd(numerator_result,denominator_result)


#     return [numerator_result//gcd,denominator_result//gcd]


# if __name__ == "__main__":
#     print(find_add([1,2],[3,2]))


#....................................................................Solution 2........................................................

import math

def find_add(first:list,second:list):

    numerator_first = first[0]
    denominator_first = first[1]

    numerator_second = second[0]
    denominator_second = second[1]

    numerator = (numerator_first * denominator_second) + (numerator_second * denominator_first)
    denominator = denominator_first * denominator_second

    gcd = math.gcd(numerator,denominator)

    return [numerator//gcd,denominator//gcd]

if __name__ == "__main__":
    print(find_add([1,2],[3,2]))