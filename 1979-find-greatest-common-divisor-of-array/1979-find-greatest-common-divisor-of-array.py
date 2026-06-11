class Solution(object):
    def findGCD(self, nums):
        nums.sort()
        s = nums[0]
        l = nums[-1]
        val = 1
        for i in range(1,l+1):
            if s%i==0 and l%i==0:
                if i>val:
                    val=i
        return val