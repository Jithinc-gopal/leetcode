class Solution(object):
    def createTargetArray(self, nums, index):
        arr = []
        for i in range(len(index)):
            x = index[i]
            arr.insert(x,nums[i])

        return arr  