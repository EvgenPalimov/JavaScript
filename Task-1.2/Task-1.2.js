/*
Задание - 1.2

Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit, 
который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. 
Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true.
*/

'use strict'

// ES5

function Post1(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post1.prototype.edit = function (text) {
    this.text = text;
}

function AttachedPost1(author, text, date) {
    Post1.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost1.prototype = Object.create(Post1.prototype);
AttachedPost1.prototype.constructor = AttachedPost1;

AttachedPost1.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}

const post1 = new AttachedPost1('Пушкин', 'писатель', new Date());
console.log(post1);
post1.edit('автор');
post1.makeTextHighlighted();
console.log(post1);

// ES6

class Post2 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = new Date();
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost2 extends Post2 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

const post2 = new AttachedPost2('Пушкин', 'писатель', new Date());
console.log(post2);
post1.edit('автор');
post1.makeTextHighlighted();
console.log(post2);