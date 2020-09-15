"use strict";
class BoletimModel {
    constructor(name, ra, bim1, bim2, bim3, bim4, dicipline) {
        this._name = name;
        this._ra = ra;
        this._bim1 = bim1;
        this._bim2 = bim2;
        this._bim3 = bim3;
        this._bim4 = bim4;
        this._dicipline = dicipline;
    }
    get name() {
        return this._name;
    }
    get dicipline() {
        return this._dicipline;
    }
    get bim1() {
        return Number(this._bim1);
    }
    get bim2() {
        return Number(this._bim2);
    }
    get bim3() {
        return Number(this._bim3);
    }
    get bim4() {
        return Number(this._bim4);
    }
    get ra() {
        return this._ra;
    }
    get avarege() {
        let avarege;
        avarege = Number((this.bim1 + this.bim2 + this.bim3 + this.bim4) / 4);
        return avarege;
    }
    get verifyAprovetion() {
        if (this.avarege < 5) {
            return "reprovado";
        }
        return "aprovado";
    }
}
