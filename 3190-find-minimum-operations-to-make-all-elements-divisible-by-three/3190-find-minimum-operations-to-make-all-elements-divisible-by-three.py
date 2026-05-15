class Solution(object):
    def minimumOperations(self, nums):
        count= 0
        for i in nums:
            a = i+1
            b = i-1
            if a%3==0:
                count+=1
            if b%3==0:
                count+=1
        return count        
                
            