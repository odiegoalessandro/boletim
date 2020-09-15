class BoletimController{
    _bim1
    _bim2
    _bim3
    _bim4
    _name
    _table:HTMLElement
    _dicipline
    _ra
    constructor(){
        this._bim1 = document.getElementById('bim1')
        this._bim2 = document.getElementById('bim2')
        this._bim3 = document.getElementById('bim3')
        this._bim4 = document.getElementById('bim4')
        this._name = document.getElementById('name')
        this._table = document.getElementById('table-body')!
        this._dicipline = document.getElementById('avarege')
        this._ra = document.getElementById('ra')
    }
    createStudent(){
        new BoletimModel(this._name, this._ra, this._bim1, this._bim2, this._bim3, this._bim4, this._dicipline)
    }
    sendForView(event){
        event.preventDefault()

        new BoletimView(this._table).update(this.createStudent())
    }
}