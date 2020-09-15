"use strict";
class BoletimView {
    constructor(elementDOM) {
        this._table = elementDOM;
    }
    showInScreen(infomation) {
        let student = this.createTr(infomation);
        console.log(student);
        this._table.appendChild(student);
    }
    createTd(slot, className) {
        var td = document.createElement('td');
        td.setAttribute('class', className);
        td.textContent = slot;
        return td;
    }
    createTr(line) {
        var tr = document.createElement('tr');
        tr.appendChild(this.createTd(line.name, "Nome"));
        tr.appendChild(this.createTd(line.ra, "R.A"));
        tr.appendChild(this.createTd(line.dicipline, "Matería"));
        tr.appendChild(this.createTd(line.bim1, "1 bim"));
        tr.appendChild(this.createTd(line.bim2, "2 bim"));
        tr.appendChild(this.createTd(line.bim3, "3 bim"));
        tr.appendChild(this.createTd(line.bim4, "4 bim"));
        tr.appendChild(this.createTd(line.avarege, line.verifyAprovetion));
        return tr;
    }
    update(data) {
        return this.showInScreen(data);
    }
}
