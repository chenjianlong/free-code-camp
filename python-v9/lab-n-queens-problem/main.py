def is_valid(matrix, row, col):
    n = len(matrix)
    for i in range(n):
        if matrix[i][col] or matrix[row][i]:
            return False
    
    for i in range(-n + 1, n):
        new_row = row + i
        new_col = col + i
        if new_row < 0 or new_row >= n or new_col < 0 or new_col >= n:
            continue
        
        if matrix[new_row][new_col]:
            return False

    for i in range(-n + 1, n):
        new_row = row - i
        new_col = col + i
        if new_row < 0 or new_row >= n or new_col < 0 or new_col >= n:
            continue
        
        if matrix[new_row][new_col]:
            return False

    return True

def dfs_n_queens(n):
    if n < 1:
        return []

    result = []
    stack = [(0, 0)]
    matrix = [[0 for i in range(n)] for i in range(n)]
    current = []
    while stack:
        row, col = stack[-1]
        if not is_valid(matrix, row, col):
            stack.pop()
            matrix[row][col] = 0
            if col + 1 < n:
                stack.append((row, col + 1))
            continue

        for i in range(row, len(current)):
            matrix[i][current[i]] = 0

        current = current[:row]
        current.append(col)
        matrix[row][col] = 1
        if row + 1 < n:
            stack.append((row + 1, 0))
        else:
            result.append(current)

    return result


print(dfs_n_queens(1))
print(dfs_n_queens(2))
print(dfs_n_queens(3))
print(dfs_n_queens(4))
print(dfs_n_queens(5))