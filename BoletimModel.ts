class BoletimModel{
    private _name:string
    private _ra:number
    private _bim1:number
    private _bim2:number
    private _bim3:number
    private _bim4:number
    private _dicipline:string
    
    constructor(name:string, ra:number, bim1:number, bim2:number, bim3:number, bim4:number, dicipline:string){
        this._name = name
        this._ra = ra
        this._bim1 = bim1
        this._bim2 = bim2
        this._bim3 = bim3
        this._bim4 = bim4
        this._dicipline = dicipline
    }
    get name(){
        return this._name
    }
    get dicipline(){
        return this._dicipline
    }
    get bim1():number{
        return Number(this._bim1)
    }
    get bim2():number{
        return Number(this._bim2)
    }
    get bim3():number{
        return Number(this._bim3)
    }
    get bim4():number{
        return Number(this._bim4)
    }
    get ra(){
        return this._ra
    }
    get avarege(){
        let avarege:number
        
        avarege = Number((this.bim1 + this.bim2 + this.bim3 + this.bim4) / 4)
        return avarege
    }
    get verifyAprovetion(){
        if(this.avarege < 5){
            return "reprovado"
        }
        return "aprovado"
    }
}