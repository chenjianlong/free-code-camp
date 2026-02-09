def adjacency_list_to_matrix(adj_map):
    adj_matrix = [[0 for col in range(len(adj_map))] for row in range(len(adj_map))]
    for key, adj_list in adj_map.items():
        for target in adj_list:
            adj_matrix[key][target] = 1

    for row in adj_matrix:
        print(f"{row}")
    
    return adj_matrix

adjacency_list_to_matrix({0: [1, 2], 1: [2], 2: [0, 3], 3: [2]})