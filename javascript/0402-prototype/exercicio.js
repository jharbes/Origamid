// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome,sobrenome,idade){
    this.nome=nome,
    this.sobrenome=sobrenome,
    this.idade=idade
}

Pessoa.prototype.nomeCompleto=function(){
    return this.nome+" "+this.sobrenome;
}

const jorge=new Pessoa('jorge','harbes',39)
console.log(jorge)
console.log(jorge.nomeCompleto())



// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document


console.log(Object.getOwnPropertyNames(document))
console.log(Object.getOwnPropertyNames(NodeList))
console.log(Object.getOwnPropertyNames(HTMLCollection))

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li;
console.log(li.constructor.name)
li.click;
console.log(li.click.constructor.name)
li.innerText;
console.log(li.innerText.constructor.name)
li.value;
console.log(li.value.constructor.name)
li.hidden;
console.log(li.hidden.constructor.name)
li.offsetLeft;
console.log(li.offsetLeft.constructor.name)
li.click();
console.log(li.click.constructor.name)

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
// Boolean