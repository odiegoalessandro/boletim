"use strict";
var BoletimController = /** @class */ (function () {
    function BoletimController() {
        this._bim1 = document.getElementById('bim1');
        this._bim2 = document.getElementById('bim2');
        this._bim3 = document.getElementById('bim3');
        this._bim4 = document.getElementById('bim4');
        this._name = document.getElementById('name');
        this._table = document.getElementById('table-body');
        this._dicipline = document.getElementById('avarege');
        this._ra = document.getElementById('ra');
    }
    BoletimController.prototype.createStudent = function () {
        new BoletimModel(this._name, this._ra, this._bim1, this._bim2, this._bim3, this._bim4, this._dicipline);
    };
    BoletimController.prototype.sendForView = function () {
        new BoletimView(this._table).update(this.createStudent());
    };
    return BoletimController;
}());
