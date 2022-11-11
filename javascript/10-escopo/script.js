// 'use strict'  // ******* IMPEDE O ESCOPO GLOBAL, IMPEDE ERROS PRIMÁRIOS, SEMPRE NO INICIO DO ARQUIVO

// ESCOPO DE FUNÇÃO
// Variáveis declaradas dentro de funções não são acessadas fora das mesmas.
// Escopo evita o conflito entre nomes.

function mostrarCarro() {
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca no console
// console.log(carro); // Erro, carro is not defined


console.log('//-----------------------------------------------------------------------------')

// VARIÁVEL GLOBAL (ERRO)
// Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro.
// 'use strict' no inicio do arquivo impede isso.

function mostrarCarro() {
  carro = 'Fusca';       
  console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca , agora nao há erra como no exemplo acima, ou seja, SEM NADA NÃO É IGUAL A VAR



console.log('//-----------------------------------------------------------------------------')


// ESCOPO DE FUNÇÃO (PAI)
// Variáveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.
// Variáveis declaradas com var DENTRO DA FUNCAO so funcionam dentro da funcao, possuem escopo de bloco nesse caso

var carro = 'Fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro);  // Fusca


console.log('//-----------------------------------------------------------------------------')


// ESCOPO DE BLOCO
// Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.

if(true) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // Carro


// VAR VAZA O BLOCO
// Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined.

if(false) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // undefined



console.log('//-----------------------------------------------------------------------------')


// CONST E LET NO LUGAR DE VAR
// A partir de agora vamos utilizar apenas const e let para declarmos variáveis.

if(true) {
  const carro = 'Fusca';
  console.log(carro);
}
// console.log(carro); // erro, carro is not defined


// {} CRIA UM BLOCO
// Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}

{
  var carro2 = 'Monza';
  const ano = 2018;
}
console.log(carro2); // Carro
// console.log(ano); // erro ano is not defined



console.log('//-----------------------------------------------------------------------------')

// FOR LOOP COM VAR
// Ao utilizar var dentro de um forloop, que é um bloco, o valor do variável utilizada irá vazar e existir fora do loop. 
// Na maioria das vezes essa prática é desaconselhavel.

for(var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // 10



// FOR LOOP COM LET
// Com o let evitamos que o número vaze.
// Na grande maioria das vezes essa será a maneira sugerida de utilizar o for

for(let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // i is not defined


console.log('//-----------------------------------------------------------------------------')


// CONST
// Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.
// Variáveis com valores constantes devem utilizar o const.

const mes = 'Dezembro';
// mes = 'Janeiro'; // erro, tentou modificar o valor
// const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona, atributos e metodos de um objeto podem ser alterados normalmente mesmo esta tendo sido declarada como const
// data = 'Janeiro'; // erro
data.hora=18 // aceita novos atributos
data.toString=function(){ // aceita adicionar novos metodos
  return `${this.dia}/${this.mes}/${this.ano}`
}
console.log(data.toString())
console.log(data)

console.log('//-----------------------------------------------------------------------------')



// LET
// Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.
// A preferencia será pela utilizacao do const

let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

// let ano = 2020; // erro, redeclarou a variável

