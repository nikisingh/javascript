function getMaxLessThanK(n, k) {
    let sequenceS = [];
    let index;
    for (index = 1; index <= n;) {
        sequenceS.push(index++);
    }
    //console.log(sequenceS);

    let i = 0;
    let bitwiseArray = [];
    for (i = 0; i < n; i++) {
        for (j = i + 1; j < n; j++) {
            //console.log(sequenceS[i]) ;
            //console.log(sequenceS[j]) ;
            //console.log('****') ;
            bitwiseArray.push(sequenceS[i] & sequenceS[j])
        }
        //console.log('outer for loop') ;
    }
    //console.log(bitwiseArray)

    const lessThanK = bitwiseArray.filter(myFunction);

    function myFunction(value) {
        return value < k;
    }

    console.log(lessThanK);

    let largest = lessThanK[0];

    for (let z = 0; z < lessThanK.length; z++) {
        if (lessThanK[z] > largest) {
            largest = lessThanK[z];
        }
    }

    return largest;
}


let q = 1;
for (let i = 0; i < q; i++) {
    const [n, k] = [955, 236];
    console.log(getMaxLessThanK(n, k));
}