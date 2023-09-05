'use strict';

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */

    /*
     * Do not remove the return statement
     */
    const re = new RegExp(/^[a].+[a]$|^[e].+[e]$|^[i].+[i]$|^[o].+$[o]|^[u].+$[u]/, 'g');

    //let re = /^([aeiou]).+\1$/;

    // \1 matches the same vowel as the first match

    return re;
}


const re = regexVar();
const s = 'ebce';    
console.log(re.test(s));
