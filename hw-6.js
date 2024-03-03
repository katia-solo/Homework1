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

let mass = [1, 3, 5, 10, 20];
console.log(mass.join(' '));

