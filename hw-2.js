// ----------------Task 1-------------------
let a = 10;
alert(a);
a = 20;
alert(a);

// ----------------Task 2-------------------
const yearFirstIphone = 2007;
alert(yearFirstIphone);

// ----------------Task 3-------------------
const jsCreatorName = 'Брендан Эйх';
alert(jsCreatorName);

// ----------------Task 4-------------------
a = 10;
b = 2;
alert([a + b, a - b, a * b, a/b ]);

// ----------------Task 5-------------------
let result = 2 ** 5;
alert(result);

// ----------------Task 6-------------------
a = 9;
b = 2;
alert(`Остаток от деления = ${a % b}`);

// ----------------Task 7-------------------
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// ----------------Task 8-------------------
let age = Number(prompt('Сколько вам лет?'));
let lastDigit = age % 10;
let lastTwoDigits = age % 100;
if (lastDigit === 1 && lastTwoDigits !== 11) { alert(`Вам ${age} год `);
} else if ( lastDigit >= 2 && lastDigit <= 4 && ( lastTwoDigits < 10 || lastTwoDigits >= 20) ) { alert(`Вам ${age} года `);   
} else { alert(`Вам ${age} лет `); };


