def fibonacci(n):
    sequence = [0, 1]
    for i in range(2, n + 1):
        sequence[i%2] = sequence[(i-1)%2] + sequence[i%2]
    
    return sequence[n%2]

print(fibonacci(0))
print(fibonacci(1))
print(fibonacci(2))
print(fibonacci(3))
print(fibonacci(5))
print(fibonacci(10))
print(fibonacci(15))