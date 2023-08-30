'use strict';


/*
 * Create the function factorial here
 */

function factorial(number){
    let result =1;
    for(let i =number ;i >=1;i--){
        result = result*i
    }
    return result;
}

//let output = factorial(4);

//console.log(output)

console.log(factorial(4))
