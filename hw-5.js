//-------------Task 1-------------------------

let min = (a, b) => {
    return a < b ? a : b;
}
console.log(min(8, 4));
console.log(min(6, 6));

// let min = (a, b) => return a < b ? a : b;

//-------------Task 2-------------------------

let isEven = () => {
    let number = Number(prompt('Введите любое число'));
    return number % 2 === 0 ? 'Число четное' : 'Нечетное число';
}

console.log(isEven());

//-------------Task 3-------------------------

let squaerNumber = (n) => n *= n;
console.log(squaerNumber(5));

let squaerNumber2 = (n) => {
    let result = n * n;
    return result;
}
console.log(squaerNumber2(5));

//-------------Task 4-------------------------

let ageCheck = () => {
    let age = Number(prompt('Сколько вам лет?'));

    if (isNaN(age) || Math.sign(age) === -1) {
        return 'Вы ввели неправильное значение';
    } else if (age > 0 && age <= 12) {
        return 'Привет, друг!';
    } {
        return 'Добро пожаловать!';
    }
}
alert(ageCheck());

//-------------Task 5-------------------------

let checkNumbers = (a, b) => {
    return isNaN(a) || isNaN(b) ? 'Одно или оба значения не являются числом' : a * b;
}
console.log(checkNumbers(12, 7));
console.log(checkNumbers('jhsgf', 8));

//-------------Task 6-------------------------

function cubeNumber() {
    let number = Number(prompt("Введите число:"));
    return isNaN(number) ? 'Переданный параметр не является числом' : `${number} в кубе равняется ${number ** 3}`;
}

for (let i = 0; i <= 10; i++) {
    console.log(cubeNumber(i));
}

//-------------Task 7-------------------------

function calсArea() {
    return Math.PI * this.radius ** 2;
}

function calсPerimeter() {
    return 2 * Math.PI * this.radius;
}

const circle1 = {
    radius: 11,
    getArea: calсArea,
    getPerimeter: calсPerimeter,
}

const circle2 = {
    radius: 20,
    getArea: calсArea,
    getPerimeter: calсPerimeter,
}
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());