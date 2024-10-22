function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function add(x, y){
    return x + y;
}

function diff(x, y){
    return x - y;
}

function calculate(x, y, fun){
    console.log("Operation: " + fun.name);
    return fun(x, y);
}

console.log(calculate(15, 5, multiply));
console.log(calculate(26, 13, divide));
console.log(calculate(86, 12, add));
console.log(calculate(46, 45, diff));