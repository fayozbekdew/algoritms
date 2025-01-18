//! question:162  == topic:array,binary search  == level:medium
// savol: array berilsa undagi istalgan element ozidan oldingi va ozidan keyingi elementdan katta bolsa
// usha elementni qaytaring yani  array[i-1] < array[i] > array[i+1] bo'lsa array[i] ni qaytarsin
var findPeakElement = function(nums) {
    let maxNum = nums.indexOf(Math.max(...nums))
    for(let i =0; i<nums.length;i++){
        if(nums[i] > nums[i-1] && nums[i] > nums[i+1]){
            return i
        }
    }
    if(maxNum+1 <= nums.length ) return maxNum
};

//binary search bilan yechim
var findPeakElement = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;    
};

//ikki yechimda ham runtime 100% beats berdi