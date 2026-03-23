# Given an Integer n, find the reverse of its digits.

# Examples:  

#     Input: n = 122
#     Output: 221
#     Explanation: By reversing the digits of number, number will change into 221.

#     Input: n = 200
#     Output: 2
#     Explanation: By reversing the digits of number, number will change into 2.

#     Input: n = 12345 
#     Output: 54321
#     Explanation: By reversing the digits of number, number will change into 54321.

def reverse_num(n):

    sum = 0
    temp = n

    while(temp):
        last = temp % 10
        sum = (sum * 10) + last
        temp = temp // 10

    print(f"Reverse of {n} is: {sum}")

if __name__ == "__main__":
    reverse_num(123456789)