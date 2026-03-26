# Given a positive integer n, find the nth Fibonacci number.

# The Fibonacci series is a sequence where a term is the sum of previous two terms. The first two terms of the Fibonacci sequence are 0 followed by 1. The Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21.

# Example:

#     Input: n = 2
#     Output: 1 
#     Explanation: 1 is the 2nd number of Fibonacci series.

#     Input: n = 5
#     Output: 5
#     Explanation: 5 is the 5th number of Fibonacci series.

def fibo(n):
    
    sum = 0

    if n <= 3:
        if n == 0:
            return 0
        else:
            return 1
        
    else:

        n = n - 3 + 1

        prev = 1
        last = 1

        while n>0:
            sum = prev + last
            prev = last
            last = sum

            n -= 1

    return last

if __name__ == "__main__":
    print(fibo(5))
    print(fibo(8000000))