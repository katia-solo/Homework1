//-------------Task 1-------------------------

let min = (a, b) => {
    return a < b ? a : b;
}
console.log(min(8, 4));
console.log(min(6, 6));

//-------------Task 2-------------------------

let number = Number(prompt('Введите любое число'));

let isEven = (number) => {
    return number % 2 === 0 ? 'Число четное' : 'Нечетное число';
}

console.log(isEven(number));

//-------------Task 3-------------------------

let squaerNumber = (n) => n *= n;
console.log(squaerNumber(5));

let squaerNumber2 = (n) => {
    let result = n * n;
    return result;
}
console.log(squaerNumber2(5));

//-------------Task 4-------------------------

let age = Number(prompt('Сколько вам лет?'));

let ageCheck = (age) => {
    if (isNaN(age) || Math.sign(age) === -1) {
        return 'Вы ввели неправильное значение';
    } else if (age > 0 && age <= 12) {
        return 'Привет, друг!';
    } {
        return 'Добро пожаловать!';
    }
}
alert(ageCheck(age));

//-------------Task 5-------------------------

let checkNumbers = (a, b) => {
    return isNaN(a) || isNaN(b) ? 'Одно или оба значения не являются числом': a * b;
}
console.log(checkNumbers(12, 7));
console.log(checkNumbers('jhsgf', 8));

