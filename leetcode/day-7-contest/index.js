Q1
/*You are given an integer array nums of size n. For each index i where 0 <= i < n, define a subarray nums[start ... i] where start = max(0, i - nums[i]).

Return the total sum of all elements from the subarray defined for each index in the array.

A subarray is a contiguous non-empty sequence of elements within an array.©leetcode*/

var subarraySum = function(nums) {
    if(nums.length ==1) return nums[0]
    let sum = 0
    for(let i=0;i<nums.length;i++){
        if(0 <= i <nums.length){
            let start = Math.max(0, i - nums[i])
            sum += nums.slice(start, i+1).reduce((acc,curr) => acc+curr,0)
        }
    }
    return sum
};