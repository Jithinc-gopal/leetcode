class Solution(object):
    def returnToBoundaryCount(self, nums):
        count = 0
        num = 0
        for i in range(len(nums)):
            if nums[i]>0:
                num+=nums[i]
            else:
                num+=nums[i]
            if num==0:
                count+=1
            
        return count 
            