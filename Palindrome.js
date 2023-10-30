/**
 * @param {number} x
 * @returns {boolean}
 */

var isPalindrome = function (x) {
    var reverse = 0;
    var original = x
    if (x < 0) {
        return false;
    }
    while (original != 0) {
        var rem = original%10;
        var num = parseInt(original/10)
        reverse = (reverse * 10) + rem;
        original = num;
    }
    console.log(x, reverse);
    result = x==reverse? true : false;
    return result;
}


   console.log(isPalindrome(-121));