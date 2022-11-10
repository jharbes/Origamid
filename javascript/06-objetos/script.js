var pessoa={nome:'André',idade:28}

console.log(pessoa)
console.log(pessoa.nome)
console.log(pessoa.idade)

var pessoa1 = {
  nome: 'André',
  idade: 28,
  profissao: 'Designer',
  possuiFaculdade: true,
}

pessoa1.nome; // 'André'
pessoa1.possuiFaculdade; // true


//----------------------------------------------------------------------------------

// MÉTODOS==> Propriedade que possui uma funcao no local do seu valor

var quadrado = {
  lados: 4,
  area: function(lado) { // a notacao da funcao pode ser reduzida para area(lado) opcionalmente
    return lado * lado;
  },
  perimetro: function(lado) {
    return this.lados * lado;
  },
}

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

console.log(quadrado.area(5))


//----------------------------------------------------------------------------------


// OBJETO COM ABREVIACAO NA SINTAXE DO MÉTODO ABAIXO:
// IMPORTANTE**** Os métodos também devem ser separados por vírgula

var quadrado2 = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
}


//----------------------------------------------------------------------------------
// Objetos servem para organizar o código em pequenas partes reutilizáveis.

// Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método?

Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14

console.table(quadrado)


//----------------------------------------------------------------------------------
// DOT NOTATION SET
// Substitua o valor de uma propriedade utilizando . e o = após o nome da mesma.

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
}

var bg = menu.backgroundColor; // '#84E'
menu.backgroundColor = '#000';
console.log(menu.backgroundColor); // '#000'


//----------------------------------------------------------------------------------
// ADICIONAR PROPRIEDADES E MÉTODOS
// Basta adicionar um novo nome e definir o valor.

var menu3 = {
  width: 800,
}

menu3.height = 50;
menu3.position = 'fixed';
menu3.esconder=function(){
  console.log('escondi')
}

console.log(menu3)


//----------------------------------------------------------------------------------
// Palavra chave this
// this ira fazer referencia ao proprio objeto

var height = 120;
var menu2 = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  }
}

menu2.metadeHeight(); // 25
// sem o this, seria 60



//----------------------------------------------------------------------------------
//PROTÓTIPO E HERANÇA
// O objeto herda propriedades e métodos do objeto que foi utilizado para criar o mesmo.
// o método hasOwnProperty retorna se o objeto possui aquele atributo que foi pesquisado,
// irá retornar falso caso o atributo seja da superclasse (herdado)

var menu5 = {
  width: 800,
}

menu5.hasOwnProperty('width') // true
menu5.hasOwnProperty('height') // false
