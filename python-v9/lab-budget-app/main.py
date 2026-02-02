class Category:
    def __init__(self, name):
        self.name = name
        self.ledger = []
        self.balance = 0.0

    def deposit(self, amount, description=""):
        self.balance += amount
        self.ledger.append({
            'amount': amount,
            'description': description
        })

    def withdraw(self, amount, description=""):
        if not self.check_funds(amount):
            return False
        
        self.balance -= amount
        self.ledger.append({
            'amount': -amount,
            'description': description
        })

        return True

    def get_balance(self):
        return self.balance

    def get_withdraw(self):
        total = 0.0
        for l in self.ledger:
            if l['amount'] >= 0:
                continue
            
            total += l['amount']
        
        return -total

    def transfer(self, amount, category):
        if not self.check_funds(amount):
            return False

        if not self.withdraw(amount, f'Transfer to {category.name}'):
            return False

        category.deposit(amount, f'Transfer from {self.name}')
        return True
    
    def check_funds(self, amount):
        return amount <= self.balance
    
    def __str__(self):
        res = f"{self.name:*^30}\n"
        for entry in self.ledger:
            res += f"{entry['description'][:23]:<23}{entry['amount']:>7.2f}\n"
        
        res += f"Total: {self.balance:5.2f}"
        return res


def create_spend_chart(categories):
    res = 'Percentage spent by category\n'
    total_withdraw = 0.0
    for category in categories:
        total_withdraw += category.get_withdraw()
    
    percentages = []
    for category in categories:
        percentages.append((category.get_withdraw() * 100 / total_withdraw) // 10 * 10)

    for percentage in range(100,-1,-10):
        res += f"{percentage:>3d}| "
        for per, category in zip(percentages, categories):
            if per >= percentage:
                res += 'o  '
            else:
                res += ' ' * 3
        
        res += '\n'
    
    res += ' ' * 4 + '-' * (len(categories)* 3 + 1) + '\n'
    max_name_len = len(max(categories, key=lambda category: len(category.name)).name)
    for i in range(max_name_len):
        res += ' ' * 5
        for category in categories:
            if len(category.name) > i:
                res += category.name[i]
            else:
                res += ' '
            
            res += ' ' * 2
        
        if i != max_name_len - 1:
            res += '\n'
    
    return res


food = Category('Food')
food.deposit(1000, 'deposit')
food.withdraw(10.15, 'groceries')
food.withdraw(15.89, 'restaurant and more food for dessert')
clothing = Category('Clothing')
food.transfer(50, clothing)
print(food)

print(create_spend_chart([food, clothing]))