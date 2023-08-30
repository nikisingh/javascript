function reverseString(s) {
    let out = [];
    let reverseOut = [];
    let arrayTostring;
    try {
        out = s.split('');
        reverseOut = out.reverse();
        //The join() method returns an array as a string.

        //The join() method does not change the original array.

        //Any separator can be specified. The default is comma (,).
        
        //arrayTostring = reverseOut.join(); 4,3,2,1
        arrayTostring = reverseOut.join('');
    }
    catch (err) {
        console.log(err.message);
        console.log(s);
    }
    finally {
        if (arrayTostring)
            console.log(arrayTostring);
    }
}

const s = 'niki';

//console.log(s.split('').reverse())

console.log(reverseString(s));
