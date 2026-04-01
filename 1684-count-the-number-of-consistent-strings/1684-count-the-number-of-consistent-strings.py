class Solution(object):
   def countConsistentStrings(self,allowed, words):
        count = 0
        for word  in words:
            valid  = True
            for i in range(len(word)):
                if word[i] not in allowed:
                    valid = False
                    break
            if valid:
                count+=1
                    
        return count  
            