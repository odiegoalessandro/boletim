class BoletimModel{
    _name
    _ra
    _bim1
    _bim2
    _bim3
    _bim4
    _dicipline
    constructor(name, ra, bim1, bim2, bim3, bim4, dicipline){
        this._name = name
        this._ra = ra
        this._bim1 = bim1
        this._bim2 = bim2
        this._bim3 = bim3
        this._bim4 = bim4
        this._dicipline = dicipline
    }
    get name(){
        return this._name
    }
    get dicipline(){
        return this._dicipline
    }
    get bim1(){
        return this._bim1
    }
    get bim2(){
        return this._bim2
    }
    get bim3(){
        return this._bim3
    }
    get bim4(){
        return this._bim4
    }
    get avarege(){
        return (this.bim1 + this.bim2 + this.bim3 + this.bim4) / 4
    }
}