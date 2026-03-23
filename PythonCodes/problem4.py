# Given a positive integer, check if the number is prime or not. A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself. Examples of the first few prime numbers are {2, 3, 5, ...}
# Examples : 

#     Input:  n = 11
#     Output: true

#     Input:  n = 15
#     Output: false

#     Input:  n = 1
#     Output: false 

def prime_number(n):

    for i in range(2,n//2):
        if (n%i == 0):
            print("false")
            return;

    print("true")

if __name__ == "__main__":
    prime_number(15)