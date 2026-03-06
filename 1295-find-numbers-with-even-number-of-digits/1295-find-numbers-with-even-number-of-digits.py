class Solution(object):
    def findNumbers(self, nums):
        n = [str(x) for x in nums]
        count = 0
        for i in n:
            if len(i)%2==0:
                count+=1
        return count 