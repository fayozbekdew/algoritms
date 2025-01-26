//! question:338 == topic:bit manipulation,dynamic programming == level:easy
var countBits = function(n) {
    let result = []
    for(let i =0;i<=n;i++){
        let binary = i.toString(2).split('').reduce((acc,curr) => ((acc*1) + (curr*1)))
        result.push(Number(binary))
    }
    return result
};