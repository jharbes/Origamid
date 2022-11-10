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
