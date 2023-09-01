/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
    let count = 0;
    objects.forEach(({x,y})=>{
        if(x==y){
            console.log(x,y)
            count++;
        }
    });
    return count ;
    
}

let obj = [{x:1,y:1},{x:2,y:1},{x:2,y:2},{x:3,y:1},{x:1,y:5}];
console.log(obj);

let out =getCount(obj);

console.log(out);
