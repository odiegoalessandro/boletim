class BoletimView{
    _table:HTMLElement
    constructor(elementDOM:HTMLElement){
        this._table = elementDOM
    }
    showInScreen(infomation){

    }
    createTd(slot, className:string){
        var td = document.createElement('td')
        td.setAttribute('class', className)
        
    }
    createTr(){

    }
    update(data){
        this.showInScreen(data)
    }
}