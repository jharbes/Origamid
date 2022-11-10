// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total)
// resultado 35

// Crie duas expressões que retornem NaN
console.log('area51'-5)
console.log('amwm'/2)

// Somar a string '200' com o número 50 e retornar 250
var soma=+'200'+50
console.log(soma)

// Incremente o número 5 e retorne o seu valor incrementado

var n=5
++n
console.log(n)

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

// Resposta:

var numero = +'80';
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
console.log(peso)
var pesoPorDois = numero / 2 + unidade; // NaN (Not a Number)
console.log(pesoPorDois)
