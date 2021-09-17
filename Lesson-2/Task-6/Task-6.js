'use script'

/**
 * Функция возвращает верный падеж для слова "рубль", в зависимости от переданого числа.
 * @param {number} numb Число, которое указал пользователь.
 * @returns {string} слово "рубль" в правильном падеже.
 */
function getMessage(numb) {
    let beforeLastDigit = getBeforeLastDigit(numb);
    if (beforeLastDigit == 1) {
        return "рублей";
    }

    let str = String(numb);
    let lastDigit = Number(str.charAt(str.length - 1));
    switch (lastDigit) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return "рублей";
        case 1:
            return "рубль";
        case 2:
        case 3:
        case 4:
            return "рубля";
    }
}

/**
 * Функция возвращает предпоследнею цифру числа, а если ее нет, то тогда null.
 * @param {number} numb Число, которое указал пользователь.
 * @returns {number} Возвращается предпоследняя цифра в числе.
 */
function getBeforeLastDigit(numb) {
    let str = String(numb);
    let digit = str.charAt(str.length - 2);
    if (digit != '') {
        return Number(digit);
    }
    return null;
}

let money = +prompt('Сколько денег хотите положить на счет?')
alert(`Ваша сумма ${money} ${getMessage(money)} успешно зачислена.`)

