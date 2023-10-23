/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    indeces = [];
    for (let i = 0; i<nums.length; i++) {
        for (j = i+1; j< nums.length; j ++) {
        if (nums[i] + nums[j] == target) {
            indeces.push(i);
            indeces.push(j);
            return indeces;
        }
    }
    }
};

console.log(twoSum(nums = [2,7,11,15], target = 9))