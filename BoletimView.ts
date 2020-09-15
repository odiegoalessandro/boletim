class BoletimView{
    _table:HTMLElement
    constructor(elementDOM:HTMLElement){
        this._table = elementDOM
    }
    showInScreen(infomation){
        let student = this.createTr(infomation)
        console.log(student)
        this._table.appendChild(student)
    }
    createTd(slot, className:string){
        var td = document.createElement('td')
        td.setAttribute('class', className)
        td.textContent = slot
        
        return td
    }
    createTr(line){
        var tr = document.createElement('tr')
        tr.appendChild(this.createTd(line.name, "name"))
        tr.appendChild(this.createTd(line.ra, "ra"))
        tr.appendChild(this.createTd(line.dicipline, "dicipline"))
        tr.appendChild(this.createTd(line.bim1, "bim1"))
        tr.appendChild(this.createTd(line.bim2, "bim2"))
        tr.appendChild(this.createTd(line.bim3, "bim3"))
        tr.appendChild(this.createTd(line.bim4, "bim4"))
        tr.appendChild(this.createTd(line.avarege, line.verifyAprovetion))
        
        return tr
    }
    update(data){
        this.showInScreen(data)
    }
}