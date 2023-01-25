/*

THIS KEYWORD
O this faz referência ao próprio objeto construído com a Constructor Function.

Variáveis dentro da Constructor estão "protegidas".

*/

function Carro(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const honda4 = new Carro('Honda', 2000);
const mazda=new Carro('Mazda',5000)



/*

EXEMPLO REAL
Quando mudamos a propriedade seletor, o objeto Dom irá passar a selecionar o novo seletor em seus métodos.

*/

const Dom = {
  seletor: 'li',
  element() {
    return document.querySelector(this.seletor);
  },
  ativo() {
    this.element().classList.add('ativo');
  },
}

Dom.ativo(); // adiciona ativo ao li
Dom.seletor = 'ul';
Dom.ativo(); // adiciona ativo ao ul

