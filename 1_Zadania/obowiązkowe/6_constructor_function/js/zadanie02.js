function Calculator() {
    this.history = [];
}

Calculator.prototype.add = function(num1, num2) {
    let result = num1 + num2;

    this.history.push(`added ${ num1 } to ${ num2 } got ${ result }`);

    return result;
}

Calculator.prototype.multiply = function(num1, num2) {
    let result = num1 * num2;

    this.history.push(`multiplied ${ num1 } with ${ num2 } got ${ result }`);

    return result;
}

Calculator.prototype.subtract = function(num1, num2) {
    let result = num1 - num2;

    this.history.push(`subtracted ${ num1 } from ${ num2 } got ${ result }`);

    return result;
}

Calculator.prototype.divide = function(num1, num2) {
    let result = num1 / num2;

    this.history.push(`divided ${ num1 } by ${ num2 } got ${ result }`);

    return result;
}

Calculator.prototype.printOperations = function() {
    for(let item of this.history)
        console.log(item);
}

Calculator.prototype.clearOperations = function() {
    this.history = [];
}

let calculator = new Calculator();

calculator.add(2, 3);
calculator.multiply(2, 3);
calculator.subtract(2, 3);
calculator.divide(2, 3);
calculator.printOperations();
calculator.clearOperations();
calculator.printOperations();