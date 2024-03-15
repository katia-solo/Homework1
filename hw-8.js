//---------------------Task 4-----------------
function delayForSecond(callback) {
    // Код писать можно только внутри этой функции
    // callback();
    setTimeout(() => callback(), 1000);
}

delayForSecond(function () {
    console.log('Привет, Глеб!');
})

//---------------------Task 5-----------------
// Функция delayForSecond через 1 секунду пишет в консоль 
// «Прошла одна секунда», а затем вызывает переданный колбэк
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) { cb(); }
    }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(() => sayHi('Глеб'))