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


// Objetos servem para organizar o código em pequenas partes reutilizáveis.

// Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um método?

Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi); // 3.14


