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

// ----------------Task 3-------------------  
let d = 7;
let e = 101;
(d > 100 || e > 100) ? console.log('Верно') : console.log('Неверно');

// ----------------Task 4-------------------  
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

// ----------------Task 5------------------- 
let monthNumber = Number(prompt('Введите номер месяца в году'));

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('осень');
        break;
    default:
        console.log('Что-то пошло не так');
        break;
}