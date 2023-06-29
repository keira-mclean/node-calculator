let Calculator = require('./Calculator.js')

let calculate = new Calculator();

let a = 15;
let b = 4;
let radius = 3.75;
let pi = Math.PI;
let side1 = 6;
let side2 = 23;


let add = calculate.add(a, b);
console.log("Add "+a+" + "+b+" = " +add);

let subtract = calculate.subtract(a, b);
console.log("Subtract "+a+" - "+b+" = " +subtract);

let multiply = calculate.multiply(a, b);
console.log("Multiply "+a+" * "+b+" = " +multiply);

let divide = calculate.divide(a, b);
console.log("Divide "+a+" / "+b+" = " +divide);

let findAreaOfCircle = calculate.findAreaOfCircle(radius, pi);
console.log("The area of the circle with radius of "+radius+ " is " + findAreaOfCircle);

let findAreaOfRectangle = calculate.findAreaOfRectangle(side1, side2);
console.log("The area of a Rectangle with a width of "+side1+" and length of "+side2+" is "+findAreaOfRectangle);
