/**
 * @param {number} n
 * @return {boolean}
 */
// Daily Streak
var isPowerOfFour = function(n) {
   let  x = Math.log10(n) / Math.log10(4);
    if (typeof(x) == 'number' && x%1 == 0) {
        return true
    } else {
        return false
    }
};

console.log(isPowerOfFour(1))