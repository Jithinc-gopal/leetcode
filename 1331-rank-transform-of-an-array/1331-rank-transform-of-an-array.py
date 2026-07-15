class Solution(object):
    def arrayRankTransform(self, arr):
        sorted_unique = sorted(set(arr))

        rank = {}

        for i, value in enumerate(sorted_unique):
            rank[value] = i + 1

        ans = []

        for value in arr:
            ans.append(rank[value])

        return ans