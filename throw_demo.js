'use strict';

function isPositive(a) {
    if (a > 0)
        return 'YES';
    try {
        if (a == 0)
            throw "Zero Error";
        if (a < 0)
            throw "Negative Error";
    }
    catch (err) {
        return err;

    }

}

let inp = 0;

console.log(isPositive(inp));
