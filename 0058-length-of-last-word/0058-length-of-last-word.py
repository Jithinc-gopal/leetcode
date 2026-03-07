class Solution(object):
    def lengthOfLastWord(self, s):
        word = s.split()
        val = word[-1]
        return(len(val))
        