//! question:172  == level: middle
var trailingZeroes = function(n) {
    let fives = 0;
    for (let i = 5; i <= n; i *= 5) {
        fives += Math.floor(n / i)
        console.log(n, i)
    }
    return fives;
};