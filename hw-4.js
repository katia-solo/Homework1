// ----------------Task 1------------------- 

for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

// ----------------Task 2------------------- 

for (let n = 1; n < 6; n++) {
    console.log(n);
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