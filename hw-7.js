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

//--------------Task 4--------------------
const arr = [52, 53, 49, 77, 21, 32];

console.log(`Максимальное: ${Math.max(...arr)}`);
console.log(`Минимальное: ${Math.min(...arr)}`);

//--------------Task 5--------------------
function randomNumberFrom1To10() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(`Случайное число от 1 до 10: ${randomNumber}`);
}
randomNumberFrom1To10();

//--------------Task 6--------------------
function generateRandomArray(n) {
    const length = Math.floor(n / 2); //Определяем длину массива
    const randomArray = [];

    for (let i = 0; i < length; i++) {
        const randonNumber = Math.floor(Math.random() * (n + 1)); //Генерим целые числа от 0 до n
        randomArray.push(randonNumber); //Добавляем их в пустой массив
    }

    return randomArray
}

// Пример использования функции
const n = 20;
console.log(generateRandomArray(n));

//--------------Task 7--------------------
function getRandomNumber(min, max) {
    // Генерируем случайное число в диапазоне от min до max (включительно)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

// Пример использования функции
const min = 10;
const max = 20;
const randomNum = getRandomNumber(min, max);
console.log("Случайное число в диапазоне от", min, "до", max, ":", randomNum);

