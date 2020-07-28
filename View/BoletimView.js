class BoletimView{
    constructor(modelo){
        //let controller = new BoletimController()
        //this.model = new BoletimModel()
        this._nome = document.getElementById('nome').value
        this._ra = document.getElementById('registro-do-aluno').value
        this._bim1 = document.getElementById('bim1').value
        this._bim2 = document.getElementById('bim2').value
        this._bim3 = document.getElementById('bim3').value
        this._bim4 = document.getElementById('bim4').value
        this._model = modelo
        this._media = this._model
        this.corpo_tabela = document.getElementById('corpo-tabela')
    }
    mostraNaTela(modelo){
        if(this._nome.length > 0 && this._ra > 0 && this._bim1 > 0 && this._bim2 > 0 && this._bim3 > 0 && this._bim4 > 0 ){
            let criaTr = document.createElement('tr')
            let view_nome = document.createElement('td')
            view_nome.innerText = this._nome
            let view_ra = document.createElement('td')
            view_ra.innerText = this._ra
            let view_bim1 = document.createElement('td')
            view_bim1.innerText = this._bim1
            let view_bim2 = document.createElement('td')
            view_bim2.innerText = this._bim2
            let view_bim3 = document.createElement('td')
            view_bim3.innerText = this._bim3
            let view_bim4 = document.createElement('td')
            view_bim4.innerText = this._bim4
            this.view_media = document.createElement('td')
            this.view_media.innerText = this._media
            criaTr.appendChild(view_nome)
            criaTr.appendChild(view_ra)
            criaTr.appendChild(view_bim1)
            criaTr.appendChild(view_bim2)
            criaTr.appendChild(view_bim3)
            criaTr.appendChild(view_bim4)
            criaTr.appendChild(this.view_media)
            this.corpo_tabela.appendChild(criaTr)
        }
        else{
            alert('invalido')
        }
    }
    update(modelo){
        this.mostraNaTela(new modelo)
    }
}