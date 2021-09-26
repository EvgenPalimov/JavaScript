/*
Задание - 1

Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
- единицы (в свойстве units)
- десятки (в свойстве tens)
- сотни (в свойстве hundereds)
*/
'use strict'

function numberPerObject(num) {
    if (!Number.isInteger(num) && num >= 0 && num <= 999) {
        console.log('Значение аргумента должно быть целым числом и быть в диапазоне [0, 999]');
        return {}
    }
    console.log(`units: ${num % 10}`);
    console.log(`tens: ${Math.floor(num / 10) % 10}`);
    console.log(`hundereds: ${Math.floor(num / 100)}`);
}

numberPerObject(123);

