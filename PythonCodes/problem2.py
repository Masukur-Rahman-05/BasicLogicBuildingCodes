# Given a positive integer n, find the sum of the first n natural numbers.

# Examples : 

#     Input: n = 3
#     Output: 6
#     Explanation: 1 + 2 + 3 = 6

#     Input: n = 5
#     Output: 15 
#     Explanation:  1 + 2 + 3 + 4 + 5 = 15

def natural_nums(n):

    # print(f"Sum of {n} natural numbers is: {int(n*(n+1)/2)}")
    print(f"Sum of {n} natural numbers is: {(n*(n+1)//2)}")


if __name__ == "__main__":
    natural_nums(3)