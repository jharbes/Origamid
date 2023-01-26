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


console.log(Document.prototype)
console.log(NodeList.prototype)
console.log(Object.getOwnPropertyNames(NodeList.prototype))
console.log(HTMLCollection.prototype)
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype))
console.log(Object.getOwnPropertyNames(Document.prototype))





// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
console.log(li.constructor.name)
li.click; // Function
console.log(li.click.constructor.name)
li.innerText; // String
console.log(li.innerText.constructor.name)
li.value; // Number
console.log(li.value.constructor.name)
li.hidden; // Boolean
console.log(li.hidden.constructor.name)
li.offsetLeft; // Number
console.log(li.offsetLeft.constructor.name)
li.click(); // Undefined
// console.log(li.click().constructor.name)

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
console.log(li.hidden.constructor.name.constructor.name)
// String