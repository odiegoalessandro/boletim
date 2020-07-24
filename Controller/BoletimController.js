class BoletimController{
    constructor(){
        this._nome = document.getElementById('nome').value
        this._ra = document.getElementById('registro-do-aluno').value
        this._bim1 = document.getElementById('bim1').value
        this._bim2 = document.getElementById('bim2').value
        this._bim3 = document.getElementById('bim3').value
        this._bim4 = document.getElementById('bim4').value
        if(this._bim1 > 10){
            this._bim1 = 10
        }
        if(this._bim2 > 10){
            this._bim2 = 10
        }
        if(this._bim3 > 10){
            this._bim3 = 10
        }
        if(this._bim4 > 10){
            this._bim4 = 10
        }
    }
    get nome(){
        return this._nome
    }
    get ra(){
        return this._ra
    }
    get primeiro_bimestre(){
        return this._bim1
    }
    get segundo_bimestre(){
        return this._bim2
    }
    get terceiro_bimestre(){
        return this._bim3
    }
    get quarto_bimestre(){
        return this._bim4
    }
}