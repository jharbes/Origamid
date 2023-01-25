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


/*

CONSTRUCTOR FUNCTION REAL
Um objeto criado com uma Constructor, não irá influenciar em outro objeto criado com a mesma Constructor.

*/

function Dom1() {
  this.seletor = 'li';
  const element = document.querySelector(this.seletor);
  this.ativo = function() {
    element.classList.add('ativo');
  };
}

const lista = new Dom1();
console.log(lista) // retornara o elemento li
lista.seletor = 'ul';
lista.ativo();
console.log(lista) // retornara o elemento ul

const lastLi = new Dom1();
lastLi.seletor = 'li:last-child';
lastLi.ativo();



// versao funcional do construtor
function Dom2(seletor) {
    this.element = function(){
        return document.querySelector(seletor);
    }
    this.ativar = function() {
      this.element().classList.add('ativar');
    };
}

const li=new Dom2('li')
const ul=new Dom2('ul')

const liLastChild=new Dom2('li:last-child')
console.log(liLastChild)
liLastChild.ativar()




/*

LEMBRE-SE DE USAR PARÂMETROS

*/

function Dom3(seletor) {
    const element = document.querySelector(seletor);
    this.ativo = function(classe) {
      element.classList.add(classe);
    };
  }
  
  const lista3 = new Dom3('ul');
  lista3.ativo('ativo5');
  
  const lastLi3 = new Dom3('li:last-child');
  lastLi3.ativo('ativo5');
  