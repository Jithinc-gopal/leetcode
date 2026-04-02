class Solution(object):
    def heightChecker(self,heights):
        count = 0
        b = sorted(heights)
        for i in range(len(heights)):
            if heights[i] != b[i]:
                count+=1
        
        return count   
            