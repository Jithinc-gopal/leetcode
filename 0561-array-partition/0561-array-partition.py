class Solution(object):
    def arrayPairSum(self, nums):
            nums.sort()
            total =0
            for i in range(0,len(nums),2):
                    total+=min(nums[i],nums[i+1])
            return total 
                
                