class Solution(object):
    def differenceOfSum(self,nums):

        result =[int(d) for num in nums for d in str(num)]
        a = sum(nums)
        b = sum(result)
        return abs(a-b)  
     
        