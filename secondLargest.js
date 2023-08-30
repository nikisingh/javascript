'use strict';

function getSecondLargest(nums) {
    // Complete the function
    let sorted = [];
    let highest;
    sorted = nums.sort(function comapre(a,b) {  return (b-a); });
    console.log(sorted)
    highest = sorted[0];
    for (var i =0 ; i<= sorted.length ; i++){
        if (highest !== sorted[i])
        return sorted[i];
    }
    
}

    const n = 5;
    const nums = [2,3,6,6,5];  
    console.log(getSecondLargest(nums));
