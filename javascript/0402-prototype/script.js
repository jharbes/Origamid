/*

PROTOTYPE
A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.

*/

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}
const andre = new Pessoa('André', 28);

console.log(Pessoa.prototype); // retorna o objeto
console.log(andre.prototype); // undefined
console.log(typeof Pessoa.prototype)



/*

FUNCAO.PROTOTYPE
É possível adicionar novas propriedades e métodos ao objeto prototype.

*/

Pessoa.prototype.andar = function() {
  return this.nome + ' andou';
}
Pessoa.prototype.nadar = function() {
  return this.nome + ' nadou';
}
console.log(Pessoa.prototype); // retorna o objeto



/*

ACESSO AO PROTÓTIPO
O objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor. Lembrando, prototype é uma propriedade de funções apenas.

*/

andre.nome;
console.log(andre.nome)
andre.idade;
console.log(andre.idade)
andre.andar();
console.log(andre.andar())
andre.nadar();
console.log(andre.nadar())



/*

PROTO
O novo objeto acessa os métodos e propriedades do protótipo através da propriedade __proto__. É papel da engine fazer essa busca, não devemos falar com __proto__ diretamente.

*/

// Acessam o mesmo método
// mas __proto__ não terá
// acesso ao this.nome

andre.andar();
console.log(andre.andar())
andre.__proto__.andar();
console.log(andre.__proto__.andar())



/*

HERANÇA DE PROTÓTIPO
O objeto possui acesso aos métodos e propriedades do protótipo do construtor responsável por criar este objeto. O objeto abaixo possui acesso a métodos que nunca definimos, mas são herdados do protótipo de Object.

*/

Object.prototype;
console.log(Object.prototype)
andre.toString();
console.log(andre.toString())
andre.isPrototypeOf();
console.log(andre.isPrototypeOf())
andre.valueOf();
console.log(andre.valueOf())