//! question number:153,154 == topic:array,binary search == level:medium,hard
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



//Question number: 155 == topic:Stack,design == level:medium
// Stack uchun arxitektura yozish kerak

var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push({
        value: val,
        minVal: this.stack.length == 0 ? val : Math.min(val,this.getMin())
    })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1].value
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1].minVal;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */