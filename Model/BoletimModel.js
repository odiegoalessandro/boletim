class BoletimModel{
    constructor(nome, materia, ra, bim1, bim2, bim3, bim4){
        this._nome = nome
        this._materia = materia
        this._ra = ra
        this._bim1 = bim1
        this._bim2 = bim2
        this._bim3 = bim3
        this._bim4 = bim4
    }
    get nome(){
        return this._nome
    }
    get materia(){
        return this._materia
    }
    get ra(){
        return this._ra
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
    get media(){
        this.total = ((parseInt(this._bim1) 
        + parseInt(this._bim2) 
        + parseInt(this._bim3) 
        + parseInt(this._bim4)) / 4).toFixed(0)
        return this.total
    }
    get verificaAprovacao(){
        if(this.media < 5){
            return "reprovado"
        }
        else{
            return "aprovado"
        }
    }
}