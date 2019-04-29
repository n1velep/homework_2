function addition(a,b) {
    return a + b;
}

function subtraction(a,b) {
    return a - b;
}

function multiplication(a,b) {
    return a * b;
}

function division(a,b) {
    return (a / b);
}

function mathOperation(arg1, arg2, operation){
    switch (operation) {
        case "add" :
            return addition(arg1, arg2);
            break;
        case "sub" :
            return subtraction(arg1, arg2);
            break;
        case "multi" :
            return multiplication(arg1, arg2);
            break;
        case "div" :
            return division(arg1, arg2);
            break;
    }
}
alert(mathOperation(5,6,"add"));