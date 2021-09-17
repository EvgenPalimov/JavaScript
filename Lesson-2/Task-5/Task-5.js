'use strict';

/**
 * Функция для сложения двух чисел
 * @param {number} num1 Первое число
 * @param {number} num2 Второе число
 * @returns {number} Возвращается сумма двух чисел "num1 + num2"
 */
function add(num1, num2) {
    return a + b
}

/**
 * Функция для разности двух чисел
 * @param {number} num1 Первое число
 * @param {number} num2 Второе число
 * @returns {number} Возвращается разность двух чисел "num1 - num2"
 */
function subtract(num1, num2) {
    return a - b
}

/**
 * Функция для умножения двух чисел
 * @param {number} num1 Первое число
 * @param {number} num2 Второе число
 * @returns {number} Возвращается результат умножения двух чисел "num1 * num2"
 */
function multiply(num1, num2) {
    return a * b
}

/**
 * Функция для деления двух чисел
 * @param {number} num1 Первое число
 * @param {number} num2 Второе число
 * @returns {number} Возвращается результат деления двух чисел "num1 / num2"
 */
function division(num1, num2) {
    return a / b
}

/**
 * Функция позволяющая произвести, сложение, вычетания, умножения, деление двух чисел
 * @param {number} arg1 Первое число 
 * @param {number} arg2 Второе число
 * @param {string} operation Знак действия, переданный в качестве строки "'+', '-', '*', '/'"
 * @throws {Error} Ecли не верно указан оператор, будет выброшена ошибка
 * @returns {number} Возвращается число, после выполнения указаного действия
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return add(arg1, arg2)
        case '-':
            return subtract(arg1, arg2)
        case '*':
            return multiply(arg1, arg2)
        case '/':
            return division(arg1, arg2)
        default:
            throw new Error(`Операция ${operation} не предусмотрена функцией`)
    }
}