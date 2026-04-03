class Solution(object):
    def sumOfSquares(self,nums):
        n = len(nums)
        sum = 0
        for i in range(len(nums)):
            if n % (i+1) == 0:
                s =  nums[i]*nums[i]
                sum+=s
                
        return sum