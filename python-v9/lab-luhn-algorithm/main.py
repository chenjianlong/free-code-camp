def verify_card_number(value):
    new_list = [int(x) for x in list(value) if x >='0' and x<='9']
    for i in range(len(new_list) - 2, -1, -2):
        new_list[i] *= 2
        if new_list[i] > 9:
            new_list[i] -= 9
    
    return 'INVALID!' if sum(new_list) % 10 else 'VALID!'

print(verify_card_number('453914889'))
print(verify_card_number('4111-1111-1111-1111'))
print(verify_card_number('1234 5678 9012 3456'))