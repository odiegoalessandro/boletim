class BoletimController{
    constructor(){
        this._nome = document.getElementById('nome')
        this._ra = document.getElementById('registro-do-aluno') 
        this._materia = document.getElementById('materia') 
        this._bim1 = document.getElementById('bim1')
        this._bim2 = document.getElementById('bim2') 
        this._bim3 = document.getElementById('bim3')
        this._bim4 = document.getElementById('bim4')
        this._corpo_tabela = document.getElementById('corpo-tabela')
        this._form = document.getElementById('form')
        
        this._view = new BoletimView(this._corpo_tabela)
    }
    criaAluno(){
        return new BoletimModel(this._nome.value,
            this._materia.value,
            this._ra.value,
            this._bim1.value,
            this._bim2.value,
            this._bim3.value,
            this._bim4.value)
    }
    mandaParaView(event){
        event.preventDefault()
        this._view.atualizacao(this.criaAluno())
        this._form.reset()
    }
}