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

var carro = 'Fusca';

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro);  // Fusca


console.log('//-----------------------------------------------------------------------------')


