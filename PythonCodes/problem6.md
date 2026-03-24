# The problem statement

Given two axis-aligned rectangles, determine whether they overlap.

Each rectangle is written as a list like `[x1, y1, x2, y2]`:

- `(x1, y1)` is the bottom-left corner
- `(x2, y2)` is the top-right corner

Two rectangles are considered overlapping only if the shared area is positive. If they only touch at an edge or a corner, that does not count as overlap.

# Breakdown the problem

We are given two rectangles:

- `rect1 = [x1, y1, x2, y2]`
- `rect2 = [x3, y3, x4, y4]`

To decide whether they overlap, we do not need to calculate the actual overlapping area.  
Instead, we only need to check whether the rectangles are completely separated.

There are two ways rectangles can be separated:

- One rectangle is fully to the left of the other
- One rectangle is fully above or below the other

If either of these happens, the rectangles do not overlap.

So the logic becomes:

1. Check horizontal separation
2. Check vertical separation
3. If neither separation exists, the rectangles overlap

# Mental modeling

The easiest way to think about this problem is:

"Two rectangles overlap unless there is a gap between them."

That gap can happen in two dimensions:

- Horizontal gap:
  - `x2 <= x3` means rectangle 1 ends before rectangle 2 starts
  - `x4 <= x1` means rectangle 2 ends before rectangle 1 starts

- Vertical gap:
  - `y2 <= y3` means rectangle 1 is completely below rectangle 2
  - `y4 <= y1` means rectangle 2 is completely below rectangle 1

If any one of these conditions is true, there is no overlap.

This is a strong mental shortcut:

"Find when overlap is impossible. If impossible cases do not happen, then overlap must exist."

# Code Implementation

The function in [problem6.py] works like this:

```python
def rect_overlap(rect1 : list,rect2:list):
    x1,y1,x2,y2 = rect1
    x3,y3,x4,y4 = rect2

    if x2<=x3 or x4<=x1:
        return False
    
    if y2<=y3 or y4<=y1:
        return False

    return True
```

Explanation:

- First, the coordinates of both rectangles are unpacked into separate variables
- Then the code checks if the rectangles are horizontally apart
- After that, it checks if they are vertically apart
- If neither condition is true, the rectangles must overlap

Example:

- `rect1 = [0,0,2,2]`
- `rect2 = [1,1,3,3]`

These rectangles share an area, so the function returns `True`.

# Takeways

- This problem is easier when we check separation instead of directly checking overlap
- Touching edges or corners are not counted as overlap, so `<=` is important here
- The solution is efficient because it uses only a few comparisons
- This is a common geometry pattern: solve the problem by identifying invalid cases first
