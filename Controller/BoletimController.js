class BoletimController{
    constructor(){
        this._nome = document.getElementById('nome').value
        this._ra = document.getElementById('registro-do-aluno').value
        this._materia = document.getElementById('materia').value
        this._bim1 = document.getElementById('bim1').value
        this._bim2 = document.getElementById('bim2').value 
        this._bim3 = document.getElementById('bim3').value
        this._bim4 = document.getElementById('bim4').value
        this._corpo_tabela = document.getElementById('corpo-tabela')
        let model = new BoletimModel(this._bim1,
                                    this._bim2,
                                    this._bim3,
                                    this._bim4)
        let view = new BoletimView(this._nome,
                                    this._materia, 
                                    this._ra, 
                                    this._bim1, 
                                    this._bim2, 
                                    this._bim3, 
                                    this._bim4,
                                    this._corpo_tabela,
                                    model.media()).mostraNaTela()
    }
}