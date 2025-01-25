//question number: 724 == Topic: Array == Level:easy
var pivotIndex = function(nums) {
    if(nums.length == 1) return 0
    for(let i =0;i<nums.length;i++){
        let pivot = i
        let left = 0
        let right = 0
        if(pivot == 0 ){
            right = nums.slice(1).reduce((acc,curr) => acc+curr)
        }else if(pivot == nums.length-1){
            left = nums.slice(0,-1).reduce((acc,curr) => acc+curr)
        }else{
        left = nums.slice(0,pivot).reduce((acc,curr) => acc+curr)
        right = nums.slice(pivot+1).reduce((acc,curr) => acc+curr)
        }
        if(left == right){
            return pivot
        }
    }
    return -1
};