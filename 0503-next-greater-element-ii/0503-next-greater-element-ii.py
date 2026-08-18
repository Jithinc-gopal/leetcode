class Solution(object):
    def nextGreaterElements(self, nums):
        n = len(nums)
        result = [-1] * n
        stack = []
        for i in range(2 * n - 1, -1, -1):
            current = nums[i % n]
            while stack and stack[-1] <= current:
                stack.pop()
            if stack:
                result[i % n] = stack[-1]
            stack.append(current)
        return result     


        
        