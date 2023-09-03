'use strict';


/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums){
let index;
for (index = 0; index < nums.length; index++) {
    if ((nums[index] % 2) == 0) {
        nums[index] = nums[index] * 2;
    } else {
        nums[index] = nums[index] * 3;
    }
}

return nums; 
}

const a = [1, 2, 3, 4, 5];

console.log(modifyArray(a).toString().split(',').join(' '));

