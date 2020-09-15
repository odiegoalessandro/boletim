"use strict";
class BoletimController {
    constructor() {
        this._bim1 = document.getElementById('bim1');
        this._bim2 = document.getElementById('bim2');
        this._bim3 = document.getElementById('bim3');
        this._bim4 = document.getElementById('bim4');
        this._name = document.getElementById('name');
        this._table = document.getElementById('table-body');
        this._dicipline = document.getElementById('avarege');
        this._ra = document.getElementById('ra');
    }
    createStudent() {
        return new BoletimModel(this._name.value, this._ra.value, this._bim1.value, this._bim2.value, this._bim3.value, this._bim4.value, this._dicipline.value);
    }
    sendForView(event) {
        event.preventDefault();
        new BoletimView(this._table).update(this.createStudent());
    }
}
