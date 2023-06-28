let readline = require('readline-sync');

class Calculation {
    constructor(num1, num2, op) {
        this.x = parseInt(num1);
        this.y = parseInt(num2);
        this.op = op;

        result = function () {
            let x = this.x;
            let y = this.y;
            let op = this.op;

            if (op === "+") {
                let result = x + y;
            } else if (op === "-") {
                let result = x - y;
            } else if (op === "/") {
                let result = x / y;
            } else if (op === "*") {
                let result = x * y;
            } else if (op === "%") {
                let result = x % y;
            } else {
                let result = "Error!";
            }
            console.log(result());

        };
    }
}

let op = readline.question("Enter an Operator: ");
let num1 = readline.question("Enter the first number to calculate: ");
let num2 = readline.question("Enter the second number to calculate: ");

let calc = new Calculation(num1, num2, op);

calc(result());