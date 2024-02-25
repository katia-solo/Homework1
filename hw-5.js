//-------------Task 1-------------------------

let min = (a, b) => {
return a < b ? a : b ;
}
console.log(min(8, 4));
console.log(min(6, 6));

//-------------Task 2-------------------------

let number = Number(prompt ('Введите любое число'));

let isEven = (number) => {
    return number % 2 === 0 ? 'Число четное': 'Нечетное число';
}

console.log(isEven(number));

