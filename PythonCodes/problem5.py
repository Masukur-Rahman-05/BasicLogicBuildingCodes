# Given two positive numbers x and y, check if y is a power of x or not.
# Examples : 

#     Input:  x = 10, y = 1
#     Output: True
#     x^0 = 1

#     Input:  x = 10, y = 1000
#     Output: True
#     x^3 = 1

#     Input:  x = 10, y = 1001
#     Output: False


def pow_of_x(x,y):

    if x == 1:
        return y == 1;

    if y==1:
        return True
    
    power = 1

    while power < y:
        power *= x

    return power == y

if __name__=="__main__":
    print(pow_of_x(10,1))
    print(pow_of_x(1, 20))
    print(pow_of_x(2, 128))
    print(pow_of_x(2, 30))