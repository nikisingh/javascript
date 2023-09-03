'use strict';

function sides(literals, ...expressions) {

    let arrayOut = [];

    arrayOut[0] = (expressions[1] + Math.sqrt(expressions[1] * expressions[1] - 16 * expressions[0])) / 4;
    arrayOut[1] = (expressions[1] - Math.sqrt(expressions[1] * expressions[1] - 16 * expressions[0])) / 4;

    //console.log(expressions[0]);
    //console.log(expressions[1]);
    //console.log(arrayOut[0]);
    //console.log(arrayOut[1]);
    return arrayOut.sort();

}

let s1 = 10;
let s2 = 14;

//[s1, s2] = [s1, s2].sort();


const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;

console.log( [x,y]);

console.log( s1);

console.log( s2);

console.log((s1 === x) ? s1 : -1);
console.log((s2 === y) ? s2 : -1);
