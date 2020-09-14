"use strict";
var BoletimView = /** @class */ (function () {
    function BoletimView(elementDOM) {
        this._table = elementDOM;
    }
    BoletimView.prototype.showInScreen = function (infomation) {
    };
    BoletimView.prototype.createTd = function (slot, className) {
        var td = document.createElement('td');
        td.setAttribute('class', className);
    };
    BoletimView.prototype.createTr = function () {
    };
    BoletimView.prototype.update = function (data) {
        this.showInScreen(data);
    };
    return BoletimView;
}());
