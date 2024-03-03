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

