class Rectangle {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }

    area(){
        let calcArea;
        calcArea = this.w * this.h ;
        return calcArea ;
    }
}

class Square extends Rectangle {
    constructor(w){
        super(w,w);
    }
}

const rec = new Rectangle(3, 4);
const sqr = new Square(4);

console.log(rec.area());
console.log(sqr.area());
