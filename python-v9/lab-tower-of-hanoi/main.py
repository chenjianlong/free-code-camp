def move(obj, src, dst, tmp, n):
    if n == 1:
        dst.append(src.pop())
        return f"{obj[1]} {obj[2]} {obj[3]}\n"
    
    rc = move(obj, src, tmp, dst, n - 1)
    rc += move(obj, src, dst, tmp, 1)
    rc += move(obj, tmp, dst, src, n - 1)
    return rc

def hanoi_solver(num):
    left = list(range(num, 0, -1))
    middle = []
    right = []
    rc = f"{left} {middle} {right}\n" + move({1: left, 3: right, 2: middle}, left, right, middle, len(left))
    return rc[:len(rc) - 1]

print(hanoi_solver(3))