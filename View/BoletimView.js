class BoletimView{
    constructor(){
        let controller = new BoletimController()
        this.model = new BoletimModel()
        this._nome = controller.nome
        this._ra = controller.ra
        this._bim1 = controller.primeiro_bimestre
        this._bim2 = controller.segundo_bimestre
        this._bim3 = controller.terceiro_bimestre
        this._bim4 = controller.quarto_bimestre
        this.corpo_tabela = document.getElementById('corpo-tabela')
    }
    mostraNaTela(){
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
        let view_media = document.createElement('td')
        view_media.innerText = this.model.media()
        criaTr.appendChild(view_nome)
        criaTr.appendChild(view_ra)
        criaTr.appendChild(view_bim1)
        criaTr.appendChild(view_bim2)
        criaTr.appendChild(view_bim3)
        criaTr.appendChild(view_bim4)
        criaTr.appendChild(view_media)
        this.corpo_tabela.appendChild(criaTr)
        }
        else{
            alert('invalido')
        }
    }
}