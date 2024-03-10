//--------------Task 1--------------------
let str = 'js';
console.log(str.toUpperCase());

//--------------Task 2--------------------
function filterByStartsWith(array, startString) {

    // Фильтруем массив
    const filteredArray = array.filter(item => item.toLowerCase().startsWith(startString.toLowerCase()));

    return filteredArray;
}

// Пример использования функции
const array = ["apple", "banana", "Orange", "pineapple", "oracl"];
const startString = "or";

console.log(filterByStartsWith(array, startString));

//--------------Task 3--------------------
let num = 32.58884;

console.log(`Меньшее целое: ${Math.floor(num)}`);
console.log(`Большее целое: ${Math.ceil(num)}`);
console.log(`Ближайшее целое: ${Math.round(num)}`);