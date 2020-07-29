class BoletimModel{
    constructor(bim1, bim2, bim3, bim4){
        this._bim1 = bim1
        this._bim2 = bim2
        this._bim3 = bim3
        this._bim4 = bim4
    }
    media(){
        this.total = ((parseInt(this._bim1) 
        + parseInt(this._bim2) 
        + parseInt(this._bim3) 
        + parseInt(this._bim4)) / 4).toFixed(0)
        return this.total
    }
}