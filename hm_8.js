function power(val, pow) {
    if (pow !== 1) { // пока pow !== 1, сводить вычисление power(val,pow) к power(val,pow-1)
        return val * power(val, pow - 1);
    } else {
        return val;
    }
}

alert( power(9, 3) );