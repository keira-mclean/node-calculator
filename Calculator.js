class Calculator {

    add(a, b) {
        return a + b;
    };

    subtract(a, b) {
        return a - b;
    };

    multiply(a, b) {
        return a * b;
    };

    divide(a, b) {
        return a / b;
    };

    findAreaOfCircle(radius, pi) {
        return pi * radius * radius;
    };

    findAreaOfRectangle(side1, side2) {
        return side1 * side2;
    }
}

module.exports = Calculator;
