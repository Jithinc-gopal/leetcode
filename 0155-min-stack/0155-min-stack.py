class MinStack(object):

    def __init__(self):
        self.stack = []
        self.min_stack = []
        

    def push(self, value):
        self.stack.append(value)
        if not self.min_stack:
            self.min_stack.append(value)
        else:
            minval = min(value,self.min_stack[-1])
            self.min_stack.append(minval)    

    def pop(self):
        if not self.min_stack:
          return None
        self.min_stack.pop()
        return self.stack.pop()  

    def top(self):
        if not self.stack:
            return None
        return self.stack[-1]    
        

    def getMin(self):
        if not self.min_stack:
            return None
        return self.min_stack[-1]    
       
        


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(value)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()