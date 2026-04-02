class Solution(object):
   def mostWordsFound(self,sentences):
        max_count = 0
        
        for i in sentences:
            count = 1
            for j in i:
                if j== " ":
                    count+=1
            if count > max_count:
                max_count = count
        
        return max_count            
                