# Find n-th term of series 1, 3, 6, 10, 15, 21...
# Last Updated : 21 Mar, 2025

# Given a number n, find the n-th term in the series 1, 3, 6, 10, 15, 21...

# Examples

#     Input  3
#     Output 6

#     Input  4
#     Output  10

# The given series represent triangular numbers which are sums of natural numbers.

#................................................................Solution 1.................................................................

# def find_nth_term(n):

#     result = 0

#     for i in range(1,n+1):
#         result = result + i

#     return result

# if __name__=="__main__":
#     print(find_nth_term(4))


#.....................................................................Solution 2 .....................................................................


def find_nth_num(n):

    return n*(n+1)//2

if __name__ == "__main__":
    print(find_nth_num(4))