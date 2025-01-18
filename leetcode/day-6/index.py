# question:162  == topic:array,binary search  == level:medium
# savol: array berilsa undagi istalgan element ozidan oldingi va ozidan keyingi elementdan katta bolsa
# usha elementni qaytaring yani  array[i-1] < array[i] > array[i+1] bo'lsa array[i] ni qaytarsin

class Solution(object):
    def findPeakElement(self, nums):
        left = 0
        right = len(nums)-1
        while left < right:
            mid = (left + right) // 2
            if nums[mid] > nums[mid+1]:
                right =mid
            else:
                left = mid+1
        return left

