/*

OBJETOS
Constructor Functions

OBJETOS
Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}. Mas e se precisarmos criar um novo objeto, com as mesmas características do anterior? É possível com o Object.create, mas veremos ele mais tarde.

carro, fiat e honda apontam para o mesmo objeto.

*/

const carro = {
  marca: 'Marca',
  preco: 0,
}

const honda = carro;
honda.marca = 'Honda';
honda.preco = 4000;

const fiat = carro;
fiat.marca = 'Fiat';
fiat.preco = 3000;

console.log(carro,honda,fiat)



/*

CONSTRUCTOR FUNCTIONS
Para isso existem as Constructor Functions, ou seja, Funções Construtoras que são responsáveis por construir novos objetos sempre que chamamos a mesma.

Usar Pascal Case, ou seja, começar com letra maiúscula.

*/

function Carro() {
  this.marca = 'Marca';
  this.preco = 0;
}

const honda1 = new Carro();
honda1.marca = 'Honda';
honda1.preco = 4000;
const fiat1 = new Carro();
fiat1.marca = 'Fiat';
fiat1.preco = 3000;
console.log(honda1,fiat1)


/*

NEW KEYWORD
A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela.

*/

const honda2 = new Carro();

// 1 Cria um novo objeto
// honda2 = {};

// 2 Define o protótipo
// onda2.prototype = Carro.prototype;

// 3 Aponta a variável this para o objeto
// this = honda2;

// 4 Executa a função, substituindo this pelo objeto
honda2.marca = 'Marca';
honda2.preco = 0;

// 5 Retorna o novo objeto
/*
return honda2 = {
  marca: 'Marca',
  preco: 0,
}
*/



/*

PARÂMETROS E ARGUMENTOS
Podemos passar argumentos que serão utilizados no momento da criação do objeto.

*/

function Carro3(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}

const honda3 = new Carro3('Honda', 4000);
const fiat3 = new Carro3('Fiat', 3000);
console.log(honda3,fiat3)