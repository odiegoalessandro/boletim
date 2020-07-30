class BoletimView{
    constructor(elementoDOM){
        this.tabela = elementoDOM
    }
    mostraNaTela(dadosDoAluno){
        console.log(dadosDoAluno)
        let aluno = this.criaTr(dadosDoAluno)    
        console.log(aluno)

       this.tabela.appendChild(aluno)
    }
    criaTr(linha){
        var criarLinha = document.createElement('tr')
        criarLinha.appendChild(this.criaTd(linha.nome, "nome"))
        criarLinha.appendChild(this.criaTd(linha.materia, "materia"))
        criarLinha.appendChild(this.criaTd(linha.ra, "ra"))
        criarLinha.appendChild(this.criaTd(linha.bim1, "bim1"))
        criarLinha.appendChild(this.criaTd(linha.bim2, "bim2"))
        criarLinha.appendChild(this.criaTd(linha.bim3, "bim3"))
        criarLinha.appendChild(this.criaTd(linha.bim4, "bim4"))
        criarLinha.appendChild(this.criaTd(linha.media, linha.verificaAprovacao))

        return criarLinha
    }
    criaTd(slot, classe){
        var criarColuna = document.createElement('td')
        criarColuna.setAttribute("class", classe)
        criarColuna.textContent = slot
        return criarColuna
    }
    atualizacao(informacao){
        this.mostraNaTela(informacao)
    }
}