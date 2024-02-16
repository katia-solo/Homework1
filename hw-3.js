// ----------------Task 1-------------------
let password = 'пароль';
let userPassword = String(prompt('Введите пароль'));

if (userPassword === 'пароль') {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}

// ----------------Task 2-------------------    
let c = 7;

function checkNumber(c) {
    console.log(c > 0 && c < 10 ? 'Верно' : 'Неверно');
}
checkNumber(0);
checkNumber(10);
checkNumber(-3);
checkNumber(2);

