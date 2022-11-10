// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome

var eu={
    nome:'Jorge',
    sobrenome:'Nami Harbes',
    idade:39,
    profissao:'Software Developer',
    altura:1.82,
    peso:85,
}

console.table(eu)

// Crie um método no objeto anterior, que mostre o seu nome completo

eu.nomeCompleto=function(){
    return `${this.nome} ${this.sobrenome}`
}

console.log(eu.nomeCompleto())

// Modifique o valor da propriedade preco para 3000
var carro = {
    preco: 1000,
    portas: 4,
    marca: 'Audi',
  }

carro.preco=3000
console.log(carro)
  
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

cachorro={
    raca:'labrador',
    cor:'preto',
    idade:10,
    latir(pessoa){
        console.log(pessoa=='homem'?'latiu':'nao latiu')
    }
}
console.log(cachorro)
cachorro.latir()
cachorro.latir('homem')