// Na declaracao de variáveis elas podem começar por $, _ ou letras, podem conter números mas não iniciar com eles
// São case sensitive, não podem utilizar palavras reservadas
// É uma boa prática usar camelCase

var nome='André'
var idade=28
var possuiFaculdade=true

console.log(nome,idade,possuiFaculdade)

var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;

console.log(precoTotal)

// Podemos declarar as variaveis com o mesmo comando, apenas separando com virgula

var sobreNome='Rafael',cidade='Rio'

console.log(sobreNome,cidade)

// Podemos declarar a variavel também sem valor, seu valor sera undefined inicialmente

var semDefinir

console.log(semDefinir)

// o var sofre hoisting, no entanto apenas para a declaracao da variavel, para o valor atribuido o hoisting nao é valido

var comida
console.log(comida)
comida='pizza'
console.log(comida)