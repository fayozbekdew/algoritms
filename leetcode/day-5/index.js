//! question number:153 == topic:array,binary search == level:medium
//? Savol: Sizga aynaladigan ro'yhat beriladi.Uni ichida eng kichik elementini O(log n) time da toping
// Misol [4,5,1,2,3] bu 2 marta aylangan ro'yhat chunki asl korinish [1.2.3.4.5] bo'lgan

var findMin = function(nums) {
    return Math.min(...nums)
};// method bilan shunday yechim qilsa ham bo'ladi bu ham O(log n) bo'ladi hattoki 100% beats berdi
var findMin = function(nums) {
    return nums.sort((a,b) => a-b)[0]
};// yoki bu usul bu ham O(log n) bo'ladi lekin masala shartida binary search ishlat degani uchun 
// shu usulni ishlataman

var findMin = function(nums) {
    let start= 0;
    let end = nums.length-1
    while(start<end){
        let mid = Math.floor((start + end) / 2)
         if (nums[mid] <= nums[end]) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }
    return nums[start]
};