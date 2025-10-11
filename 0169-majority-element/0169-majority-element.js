/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = {};  // to store frequency of each number
    let majority = nums[0];  // assume first number is majority

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        // count the frequency
        if (count[num]) {
            count[num]++;
        } else {
            count[num] = 1;
        }

        // check if this number becomes majority
        if (count[num] > nums.length / 2) {
            majority = num;
            break;
        }
    }

    return majority;
};
