
function getLetter(s) {
    let letter;
    // Write your code here
    switch (s[0]) {
        case ('a' ||  'e' ||  'i' ||  'o' ||  'u' ) :
            letter = 'A' ; 
            break;
        case ('b' || 'c' || 'd' ||   'f' ||   'g' ):
             letter = 'B' ; 
            break;
        case (  'h' ||   'j' ||   'k' ||   'l' ||   'm' ):
             letter = 'C' ;   
             break;  
        case (  'n' ||   'p' ||   'q' ||   'r' ||   's'||   't' ||   'v' ||   'w'||   'x' ||   'y' ||   'z' ):
             letter = 'D' ; 
             break;
        default :
            break;
    }
    
    return letter;
}

let out = getLetter('agdt') ;

console.log(out);

/*let s = 'agdt';

if (s[0] == 'a' ||   'e' ||   'i' ||   'o' ||   'u'  ) {
    let lett = 'A' ; 
    console.log(lett)
}
*/
