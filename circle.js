circle.js
const Shape =require("./shape")


class Circle extends Shape {

   

    calculateArea() {
        console.log('calculateArea');
    }

}

module.exports = Circle;