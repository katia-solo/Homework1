//---------------------Task 1-----------------
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

// Колбэк для sort
console.log(people.sort((a, b) => a.age - b.age));

//---------------------Task 2-----------------
function isPositive(num) {
    return num > 0;
}
function isMale(person) {
    return person.gender === 'male';
}
function filter(arr, ruleFunction) {

    const output = [];

    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            output.push(arr[i]);
        }
    }

    return output;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people2 = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people2, isMale));

// //---------------------Task 4-----------------
// function delayForSecond(callback) {
//     // Код писать можно только внутри этой функции
//     // callback();
//     setTimeout(() => callback(), 1000);
// }

// delayForSecond(function () {
//     console.log('Привет, Глеб!');
// })

// //---------------------Task 5-----------------
// // Функция delayForSecond через 1 секунду пишет в консоль 
// // «Прошла одна секунда», а затем вызывает переданный колбэк
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
//         if (cb) { cb(); }
//     }, 1000)
// }

// // Функция sayHi выводит в консоль приветствие для указанного имени
// function sayHi(name) {
//     console.log(`Привет, ${name}!`);
// }

// // Код выше менять нельзя

// // Нужно изменить код ниже:
// delayForSecond(() => sayHi('Глеб'))