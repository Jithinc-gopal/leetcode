class Solution(object):
    def canAliceWin(self, nums):
        alice = 0
        bob = 0
        for i in nums:
            if i >= 10:
                alice+=i
            else:
                bob+=i  
        if alice==bob:
                return False
        return True    
        