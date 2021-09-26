/*
Задание - 1.1

Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> типы на es5 и es6),
конструктор Product, который принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product
должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount
не должен быть внутри функции-конструктора, и также не нужно создавать отдельный объект-прототип (как объект transport в уроке).
*/
'use strict'

// ES5

function Product1(name, price) {
    this.name = name;
    this.price = price;
}

Product1.prototype.make25PercentDiscount = function () {
    this.price = this.price * 0.75;
}

let product1 = new Product1("продукт-1", 1000);
product1.make25PercentDiscount();
console.log(product1)


// ES6

class Product2 {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price * 0.75;
    }
}

let product2 = new Product2("продукт-2", 9999);
product2.make25PercentDiscount();
console.log(product2)