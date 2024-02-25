// ----------------Task 1------------------- 

for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

// ----------------Task 2------------------- 

for (let e = 1; e < 6; e++) {
    console.log(e);
}

// ----------------Task 3------------------- 

let a = 7
while (a < 23) {
    console.log(a);
    a++;
}

// ----------------Task 4------------------- 

const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
}
for (const key in obj) {
    console.log(`${key} - зарплата ${obj[key]}`);
}

// ----------------Task 5------------------- 

let n = 1000;
let num = 0;

// for (; n >= 50; num++) {
//     n /= 2;
// }
while (n >= 50) {
    n /= 2;
    num++;
}

console.log(num);
console.log(n);


// ----------------Task 6------------------- 

let firstFriday = 3; // первая пятница месяца, можно изменять в зависимости от месяца

for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}

