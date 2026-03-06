class Solution(object):
    def lengthOfLastWord(self, s):
        word = s.split()
        print(word)
        val = word[-1]
        return(len(val))
        