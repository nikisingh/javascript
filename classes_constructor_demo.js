class Polygon {
    constructor(sides) {

        this.sides = sides;

    }

    perimeter() {

        let permeterSum = 0;

        let index = 0;
        for (index = 0; index < this.sides.length; index++) {
            permeterSum = permeterSum + this.sides[index];
        }
        return permeterSum;
    }
}

const rectangle = new Polygon([10, 20, 10, 20]);
const square = new Polygon([10, 10, 10, 10]);
const pentagon = new Polygon([10, 20, 30, 40, 43]);
const triangle = new Polygon([10, 20, 3]);

console.log(rectangle.perimeter());
console.log(square.perimeter());
console.log(pentagon.perimeter());
console.log(triangle.perimeter());
