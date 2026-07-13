class Solution(object):
    def countSeniors(self, details):
        count = 0
        for i in details:
            result = int(str(i)[11:13])
            if result >60:
                count+=1
        return count  
            