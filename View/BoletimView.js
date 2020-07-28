class BoletimView{
    constructor(modelo){
        this._nome = document.getElementById('nome').value
        this._ra = document.getElementById('registro-do-aluno').value
        this._bim1 = document.getElementById('bim1').value
        this._bim2 = document.getElementById('bim2').value
        this._bim3 = document.getElementById('bim3').value
        this._bim4 = document.getElementById('bim4').value
        this.model = modelo
        this._media = modelo.media()
        this.corpo_tabela = document.getElementById('corpo-tabela')
    }
    mostraNaTela(modelo){
        if(this._nome.length > 0 && this._ra > 0 && this._bim1 > 0 && this._bim2 > 0 && this._bim3 > 0 && this._bim4 > 0 ){
            this.corpo_tabela.innerHTML = 
            `
                <tr>
                    <td>${this._nome}</td>
                    <td>${this._ra}</td>
                    <td>${this._bim1}</td>
                    <td>${this._bim2}</td>
                    <td>${this._bim3}</td>
                    <td>${this._bim4}</td>
                    <td id="media">${this._media}</td>
                </tr>
            `
            let media = document.getElementById('media') 
            if(this.model.reprova() === false){
                media.style.color = "blue"
                console.log('Aprovado')
            }
            else{
                media.style.color = "red"
                console.log()
            }
        }
        else{
            alert('invalido')
        }
    }
    update(modelo){
        this.mostraNaTela(new modelo)
    }
}