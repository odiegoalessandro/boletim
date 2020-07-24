class BoletimModel{
    constructor(){
        let controller = new BoletimController()
        this._bim1 = parseInt(controller.primeiro_bimestre)
        this._bim2 = parseInt(controller.segundo_bimestre)
        this._bim3 = parseInt(controller.terceiro_bimestre)
        this._bim4 = parseInt(controller.quarto_bimestre)
    }
    media(){
        return ((this._bim1 + this._bim2 + this._bim3 + this._bim4) / 4).toFixed(1)
    }
}