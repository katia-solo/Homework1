//-------------------Task 1--------------------------

const numbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    if (numbers[i] === 10) break;
}

//-------------------Task 2--------------------------

const array = [1, 5, 4, 10, 0, 3];

let position = array.indexOf(4);
console.log(`4 is located on position number ${position}`);

//-------------------Task 3--------------------------

const mass = [1, 3, 5, 10, 20];
console.log(mass.join(' '));

//-------------------Task 4--------------------------

const multiArray = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];

//вариант 1
// for (let i = 0; i < multiArray.length; i++) {
//     // Сначала выводим в консоль индекс подмассива
//     console.log(`Подмассив ${i}:`);
//     for (let j = 0; j < multiArray[i].length; j++) {
//         // Затем выводим каждый элемент подмассива
//         console.log(multiArray[i][j]);
//     }
// }

//вариант 2

// JSON.stringify преобразует массив (или любой другой объект JavaScript) в строку в формате JSON, что позволяет получить точное текстовое представление массива, включая скобки и структуру массива
console.log(JSON.stringify(multiArray));

//-------------------Task 5--------------------------

const addingElements = [1, 1, 1];
addingElements.push(2, 2, 2);
console.log(addingElements);

//-------------------Task 6--------------------------
//вариант 1
const mixArr = [9, 8, 7, 'a', 6, 5];
mixArr.sort().pop();
console.log(mixArr);

//вариант 2
const mixArray = [9, 8, 7, 'a', 6, 5];
mixArray.sort().filter(lit => !isNaN(lit));
// const filtArray = mixArray.filter(lit => !isNaN(lit));
console.log(mixArr);

//-------------------Task 7--------------------------

const guess = [9, 8, 7, 6, 5];
let num = Number(prompt('Could you please guess the number in the array?'));

if (guess.includes(num)) {
    alert("Right!");
} else {
    alert("Wrong");
}

//-------------------Task 8--------------------------

let string = 'abcdef';
const revString = string.split('').reverse().join('');
console.log(revString);

//-------------------Task 9--------------------------
//вариант 1
const arrayOne = [[1, 2, 3], [4, 5, 6]];

// Выпрямление массива методом flat() - на 1 уровень глубины
const arrayTwo = arrayOne.flat();
console.log(arrayTwo);

//вариант 2

const twoDimArray = [[1, 2, 3], [4, 5, 6]];

// Объединение массивов с помощью оператора spread - разворачивает сначало 0й, потом 1й
const oneDimArray = [...twoDimArray[0], ...twoDimArray[1]];
console.log(oneDimArray);

//-------------------Task 10--------------------------

const arrayAny = [2, 5, 8, 3, 6];

for (let i = 0; i < arrayAny.length - 1; i++) { // Обратите внимание на array.length - 1, чтобы избежать выхода за пределы массива
    // Выводим сумму текущего и следующего элементов
    console.log(arrayAny[i] + arrayAny[i + 1]);
}

//-------------------Task 11--------------------------

const integersArray = [2, 6, 7, 8, 9, 1];
const result = integersArray.map(item => (item * item));
console.log(result);

//-------------------Task 12--------------------------

const stringArray = ['this', 'is', 'strings'];
const lengthsArray = stringArray.map(string => string.length);
console.log(lengthsArray);

//-------------------Task 13--------------------------

function getNegativeNumbers(arr) {
    return arr.filter(number => number < 0);
}

// Пример использования
const numbersArray = [1, -2, 3, -4, 5, -6, -7];
const negativeNumbersArray = getNegativeNumbers(numbersArray);

console.log(negativeNumbersArray);

