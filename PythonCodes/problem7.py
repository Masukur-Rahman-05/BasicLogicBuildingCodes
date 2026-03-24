def pair_cube_count(n):

    count = 0
    a = 1

    while a*a*a <=n:
        a_cubed = a*a*a
        b_cubed = n - a_cubed

        b = round(b_cubed ** (1/3))

        if b > 0 and b * b * b == b_cubed:
            count += 1

        a += 1

    return count

if __name__ == "__main__":
    print(pair_cube_count(9))