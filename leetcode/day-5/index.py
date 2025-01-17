# question number:153 == topic:array,binary search == level:medium
# Savol: Sizga aynaladigan ro'yhat beriladi.Uni ichida eng kichik elementini O(log n) time da toping
# Misol [4,5,1,2,3] bu 2 marta aylangan ro'yhat chunki asl korinish [1.2.3.4.5] bo'lgan

class Solution(object):
    def findMin(self, nums):
        start = 0
        end = len(nums) -1
        while start < end:
            mid = (start+end) // 2
            if nums[end] >= nums[mid]:
                end = mid
            else:
                start = mid+1
        return nums[start]
        