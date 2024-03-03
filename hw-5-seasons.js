function getSeason(monthNumber) {
    switch (true) {
        case (monthNumber < 1 || monthNumber > 12 || isNaN(monthNumber)):
            return 'Недопустимое значение. Введите число от 1 до 12.';
        case (monthNumber == 12 || monthNumber <= 2):
            return 'Зима';
        case (monthNumber >= 3 && monthNumber <= 5):
            return 'Весна';
        case (monthNumber >= 6 && monthNumber <= 8):
            return 'Лето';
        case (monthNumber >= 9 && monthNumber <= 11):
            return 'Осень';
        default:
            return 'Ошибка: Невозможно определить время года.';
    }
}

document.getElementById("checkSeasonBtn").addEventListener("click", function () {
    let monthNumber = Number(prompt("Введите номер месяца (1-12):"));
    alert(getSeason(monthNumber));
});
