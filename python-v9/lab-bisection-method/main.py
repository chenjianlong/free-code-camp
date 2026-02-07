def square_root_bisection(num, tolerance=0.01, maximum=10):
    if not isinstance(num, int) and not isinstance(num, float):
        raise TypeError('"num" must be number')
    
    if num < 0:
        raise ValueError('Square root of negative number is not defined in real numbers')

    if num == 0 or num == 1:
        print(f"The square root of {num} is {num}")
        return num
    
    if num < 1:
        left = 0
        right = 1
    else:
        left = 1
        right = num
    
    mid = (left + right) / 2
    count = 0
    while count < maximum:
        count += 1
        if pow(mid, 2) > num:
            right = mid
        else:
            left = mid
        
        mid = (left + right) / 2
    
    if abs(pow(mid, 2) - num) > tolerance:
        print(f'Failed to converge within {maximum} iterations')
        return None
    else:
        print(f"The square root of {num} is approximately {mid}")
        return mid

print(square_root_bisection(0.001, 1e-7, 50))