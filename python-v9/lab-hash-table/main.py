class HashTable:
    def __init__(self):
        self.collection = dict()
    
    def hash(self, key):
        if not isinstance(key, str):
            raise TypeError('Input "key" must be str')
        
        res = 0
        for i in key:
            res += ord(i)
        
        return res
    
    def add(self, key, val):
        hash_key = self.hash(key)
        if hash_key not in self.collection:
            self.collection[hash_key] = dict()
        
        self.collection[hash_key][key] = val
    
    def remove(self, key):
        hash_key = self.hash(key)
        if hash_key not in self.collection:
            return
        
        if key not in self.collection[hash_key]:
            return
        
        del self.collection[hash_key][key]
        if not len(self.collection[hash_key]):
            del self.collection[hash_key]
    
    def lookup(self, key):
        hash_key = self.hash(key)
        if hash_key not in self.collection:
            return None
        
        if key not in self.collection[hash_key]:
            return None
        
        return self.collection[hash_key][key]