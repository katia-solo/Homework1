// ----------------Task 1-------------------
// let password = 'пароль';
// let userPassword = String(prompt('Введите пароль'));

// if (userPassword === 'пароль') {
//     alert('Пароль введен верно');
// } else {
//     alert('Пароль введен неправильно');
// }

// ----------------Task 2-------------------    
// let c = 7;

// function checkNumber(c) {
//     console.log(c > 0 && c < 10 ? 'Верно' : 'Неверно');
// }
// checkNumber(0);
// checkNumber(10);
// checkNumber(-3);
// checkNumber(2);

// ----------------Task 3-------------------  
// let d = 7;
// let e = 101;
// (d > 100 || e > 100) ? console.log('Верно') : console.log('Неверно');

// ----------------Task 4-------------------  
// let a = '2';
// let b = '3';
// alert(Number(a) + Number(b));

// ----------------Task 5------------------- 
// let monthNumber = Number(prompt('Введите номер месяца в году'));

// switch (monthNumber) {
//     case 12:
//     case 1:
//     case 2:
//         console.log('зима');
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log('весна');
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log('лето');
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log('осень');
//         break;
//     default:
//         console.log('Что-то пошло не так');
//         break;
// }

// ----------------Task 7------------------- 
// let number = Number(prompt('Пожалуйста, введите любое число'));
// let ost = number % 2;
// if (!isNaN(number)) {
//     if (ost === 0) {
//         alert('Число четное');
//     } else {
//         alert('Число НЕчетное');
//     }
// } else {
//     alert('Вы ввели не число');
// }

// ----------------Task 8------------------- 

const userAgent = navigator.userAgent || navigatorID.vendor || window.opera;
alert(userAgent);
alert(/iPad|Mac|OS|Macintosh|Apple|iPod/.test(userAgent) && !window.MSStream);

if (/iPad|Mac|OS|Macintosh|Apple|iPod/.test(userAgent) && !window.MSStream) {
    alert('Установите версию приложения для iOS по ссылке');
} else if (/android|windows|win|window/i.test(userAgent)) {
    alert('Установите версию приложения для Android по ссылке');
} else {
    alert('Неизвестная ОС');
}
