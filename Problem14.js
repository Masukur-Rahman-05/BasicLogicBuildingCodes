/*
Write an efficient program to count the number of 1s in the binary representation of an integer.
Examples : 

    Input : n = 6
    Output : 2
    Binary representation of 6 is 110 and has 2 set bits

    Input : n = 13
    Output : 3
    Binary representation of 13 is 1101 and has 3 set bits

*/

const BitCount = (n) => {
  let count = 0;

  while (n > 0) {
    n = n & (n - 1);
    count++;
  }

  return count;
};

console.log(BitCount(6));

//Explanation

/*


The n & (n-1) trick works like this:

When you subtract 1 from a binary number, what happens?

Starting from the right, all 1s become 0s until you reach the first 0, which becomes a 1
When you do a bitwise AND (&) between two numbers, a position is 1 only if BOTH numbers have a 1 in that position

Let's see this with our example of 13:

13    = 1 1 0 1
13-1  = 1 1 0 0

When we subtract 1 from 13:

The rightmost 1 becomes 0
We get 12 (1100)

Now when we do 13 & 12:

13    = 1 1 0 1
12    = 1 1 0 0
--------------
13&12 = 1 1 0 0  (This is 12)

Notice what happened? The rightmost 1 in 13 disappeared.
If we repeat this process:

12    = 1 1 0 0
12-1  = 1 0 1 1
--------------
12&11 = 1 0 0 0  (This is 8)

Again, the rightmost 1 disappeared.
And one more time:

8     = 1 0 0 0
8-1   = 0 1 1 1
--------------
8&7   = 0 0 0 0  (This is 0)


The last 1 disappeared and we got 0.
So, every time we do n & (n-1), we're turning off exactly one light (the rightmost 1 bit). If we have to do this 3 times before all lights are off, then the original number had 3 lights on (3 set bits).


*/
