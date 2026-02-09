def dfs(adj_matrix, src_node_no):
    reach = {src_node_no}
    stack = [src_node_no]
    while stack:
        current = stack.pop()
        for node_no in range(len(adj_matrix[current])):
            if not adj_matrix[current][node_no]:
                continue
            
            if node_no not in reach:
                stack.append(node_no)
                reach.add(node_no)

    return list(reach)