"use strict";
var BoletimModel = /** @class */ (function () {
    function BoletimModel(name, ra, bim1, bim2, bim3, bim4, dicipline) {
        this._name = name;
        this._ra = ra;
        this._bim1 = bim1;
        this._bim2 = bim2;
        this._bim3 = bim3;
        this._bim4 = bim4;
        this._dicipline = dicipline;
    }
    Object.defineProperty(BoletimModel.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoletimModel.prototype, "dicipline", {
        get: function () {
            return this._dicipline;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoletimModel.prototype, "bim1", {
        get: function () {
            return this._bim1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoletimModel.prototype, "bim2", {
        get: function () {
            return this._bim2;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoletimModel.prototype, "bim3", {
        get: function () {
            return this._bim3;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoletimModel.prototype, "bim4", {
        get: function () {
            return this._bim4;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BoletimModel.prototype, "avarege", {
        get: function () {
            return (this.bim1 + this.bim2 + this.bim3 + this.bim4) / 4;
        },
        enumerable: false,
        configurable: true
    });
    return BoletimModel;
}());
