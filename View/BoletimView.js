class BoletimView{
    constructor(nome,materia, ra, bim1, bim2, bim3, bim4, tabela, media){
        this._nome = nome
        this._materia = materia
        this._ra = ra
        this._bim1 = bim1
        this._bim2 = bim2
        this._bim3 = bim3
        this._bim4 = bim4
        this._media = media
        this._tabela = tabela       
    }
    mostraNaTela(){
        if(this._nome.length > 0
            && this._materia.length > 0
            && this._ra.length > 0
            && this._bim1.length > 0
            && this._bim2.length > 0
            && this._bim3.length > 0
            && this._bim4.length > 0){
            this.tr_boletim = document.createElement('tr') 
        
            this.td_nome = document.createElement('td')
            this.td_nome.innerText = this._nome
        
            this.td_materia = document.createElement('td')
            this.td_materia.innerText = this._materia
        
            this.td_ra = document.createElement('td')
            this.td_ra.innerText = this._ra
            
            this.td_bim1 = document.createElement('td')
            this.td_bim1.innerText = this._bim1
          
            this.td_bim2 = document.createElement('td')
            this.td_bim2.innerText = this._bim2
           
            this.td_bim3 = document.createElement('td')
            this.td_bim3.innerText = this._bim3
            
            this.td_bim4 = document.createElement('td')
            this.td_bim4.innerText = this._bim4
            
            this.td_media = document.createElement('td')
            this.td_media.innerText = this._media

            this.tr_boletim.appendChild(this.td_nome)
            this.tr_boletim.appendChild(this.td_materia)
            this.tr_boletim.appendChild(this.td_ra)
            this.tr_boletim.appendChild(this.td_bim1)
            this.tr_boletim.appendChild(this.td_bim2)
            this.tr_boletim.appendChild(this.td_bim3)
            this.tr_boletim.appendChild(this.td_bim4)
            this.tr_boletim.appendChild(this.td_media)

            this._tabela.appendChild(this.tr_boletim)

            if(this._media >= 5){
                this.td_media.style.color = "blue"
            }
            else{
                this.td_media.style.color = "red"
            }
        }
        else{
            alert('invalido')
       }
    }
}