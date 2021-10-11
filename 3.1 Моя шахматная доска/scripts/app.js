'use strict'

let app = {
    config: {
        rows: [8, 7, 6, 5, 4, 3, 2, 1],
        cols: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    },

    run() {
        //генерируем доску
        this.generateBoard();
        //вставляет все фигуры
        this.insertFiguresOnDesk();
        //добавляем колонку с номерами строк
        this.insertRowsNumbers();
        //добавляем строку с названиями колонок
        this.insertColsChars();
    },
    /**
     * Метод генерирует игровое поле 8 на 8.
     */
    generateBoard() {
        var table = document.createElement("table");
        for (var i = 0; i < 8; i++) {
            var tr = document.createElement('tr');
            for (var j = 0; j < 8; j++) {
                var td = document.createElement('td');
                td.setAttribute("data-rownum", app.config.rows[i]);
                td.setAttribute("data-colchar", app.config.cols[j]);
                if (i % 2 == j % 2) {
                    td.className = "white";
                } else {
                    td.className = "black";
                }
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        document.body.appendChild(table);
    },

    /**
     * Метод вставляет на доску все фигуры.
     */
    insertFiguresOnDesk() {
        for (let i = 0; i < 16; i++) {
            let cell = document.querySelector(`[data-rownum="${figurs[i].coordRow}"][data-colchar="${figurs[i].coordCol}"]`);
            cell.innerHTML = figurs[i].figure;
        }

        let whitePawnsRow = document.querySelectorAll('tr:nth-child(7) td');
        for (let i = 0; i < whitePawnsRow.length; i++) {
            whitePawnsRow[i].innerHTML = figurs[16].figure;
        }

        let blackPawnsRow = document.querySelectorAll('tr:nth-child(2) td');
        for (let i = 0; i < blackPawnsRow.length; i++) {
            blackPawnsRow[i].innerHTML = figurs[17].figure;
        }

    },


    /**
    * Метод вставляет на существующую доску колонку 
    * слева, с указанием номера строки.
    */
    insertRowsNumbers() {
        let trs = document.querySelectorAll('tr');
        for (let i = 0; i < trs.length; i++) {
            let td = document.createElement('td');
            td.innerText = this.config.rows[i];
            trs[i].insertAdjacentElement("afterbegin", td);
        }
    },

    /**
     * Метод создает строку (tr) с названиями колонок в виде букв,
     * а также в начале вставляет пустую ячейку, которая идет под
     * цифрами.
     */
    insertColsChars() {
        let tr = document.createElement('tr');
        tr.innerHTML += `<td></td>`;
        for (let i = 0; i < this.config.cols.length; i++) {
            tr.innerHTML += `<td>${this.config.cols[i]}</td>`;
        }
        let table = document.querySelector("table");
        table.insertAdjacentElement("beforeend", tr);
    },
}

app.run()
