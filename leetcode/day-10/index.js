//! question:275 == topic:binary search,array == level:medium

var hIndex = function(citations) {
    let left = 0;
    let right = citations.length -1
    while(left <= right){
        let middle = Math.floor((left + right) / 2)
        if(middle+1 <= citations[citations.length-middle-1]){
            left = middle+1
            continue
        }
        right = middle-1  
    }
    return left
};