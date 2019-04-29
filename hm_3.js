
var a = +prompt("Введите первое число ");
var b = +prompt("Введите второе число ");
if (a > 0 && b > 0) {
    alert(a - b);
} else if (b < 0 && a < 0){
    alert(a * b);
} else {
    alert(a + b);
}
