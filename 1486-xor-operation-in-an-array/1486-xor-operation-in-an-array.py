class Solution(object):
    def xorOperation(self, n, start):
        sum = 0
        nums = [start+2*i for i in range(n) ]
        for i in nums:
            sum^=i
        return sum    
            
        