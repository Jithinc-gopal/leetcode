class Solution(object):
    def validDigit(self, n, x):
        s = str(n)
    
        if int(s[0])==x:
            return False
        
        for i in s:
            if int(i)==x:
                return True
        return False  