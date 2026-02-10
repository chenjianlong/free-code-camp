import sys


def climb_stairs_optimized(n):
    if n <= 2:
        return n
    
    prev2, prev1 = 1, 2  # Only store last two values
    for i in range(3, n + 1):
        current = prev1 + prev2
        prev2, prev1 = prev1, current
    return prev1

if __name__ == '__main__':
    print(climb_stairs_optimized(int(sys.argv[1])))