// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
      console.log(this.nome + ' andou');
    }
  }


function Pessoa(nome,idade){
    this.nome=nome
    this.idade=idade
    this.andar=function(){
        console.log(this.nome + ' andou')
    }
}

const jorge=new Pessoa('Jorge',39)
console.log(jorge)
jorge.andar()
  
  // Crie 3 pessoas, João - 20 anos,
  // Maria - 25 anos, Bruno - 15 anos

const joao=new Pessoa('João',20)
const maria=new Pessoa('Maria',25)
const bruno=new Pessoa('Bruno',15)
  
  // Crie uma Constructor Function (Dom) para manipulação
  // de listas de elementos do dom. Deve conter as seguintes
  // propriedades e métodos:
  //
  // elements, retorna NodeList com os elementos selecionados
  // addClass(classe), adiciona a classe a todos os elementos
  // removeClass(classe), remove a classe a todos os elementos
  
  
function DomNovo(elements){
    this.elements=document.querySelectorAll(elements)

    this.addClass=function(classe){
        this.elements.forEach((item)=>{
            item.classList.add(classe)
        })
    }

    this.removeClass=function(classe){
        this.elements.forEach((item)=>{
            item.classList.remove(classe)
        })
    }
}

const lista5=new DomNovo('li')
console.log(lista5)
console.log(lista5.elements)
console.log(lista5.elements)
lista5.addClass('novaClasse')
lista5.addClass('gama')
lista5.removeClass('gama')
lista5.removeClass('ativar')