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

function playGame() {
    const words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    // Перемешиваем элементы массива
    words.sort(() => Math.random() - 0.5);

    // Выводим на экран перемешанные слова
    alert("Запомните слова: " + words.join(', '));

    // Запрашиваем у пользователя первое и последнее слова из массива
    const firstWord = prompt("Введите первое слово из списка:");
    const lastWord = prompt("Введите последнее слово из списка:");

    // Проверяем, угадал ли пользователь
    const isCorrect = firstWord.toLowerCase() === words[0].toLowerCase() && lastWord.toLowerCase() === words[words.length - 1].toLowerCase();

    // Выводим на экран сообщение для пользователя
    alert(isCorrect ? "Поздравляем! Вы угадали оба слова." : "К сожалению, вы ошиблись.");

}

