// utilizamos a notacao 'e' para representar o expoente 10 elevado a algum numero multiplicado pelo numero antecessor, exemplo:

var num1=2e10,
    num2=1e5,
    num3=3e-3
var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000
    
console.log(num1,num2,num3)

// operadores aritmeticos basicos
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

// operadores aritmeticos strings

var soma = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * '2'; // 200
var divisao = 'Comprei 10' / 2; // NaN (Not a Number)

// a ordem importa
var total1 = 20 + 5 * 2; // 30
var total2 = (20 + 5) * 2; // 50
var total3 = 20 / 2 * 5; // 50
var total4 = 10 + 10 * 2 + 20 / 2; // 40

console.log(20/2*5)
console.log(10+10+20+30*4/2+10)

// operadores aritmeticos unarios
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6


// o operador unario + e - na frente da variavel vai tentar converte-lo em um numero, sendo que o + sera o numero positivo e o - o numero negativo
var frase = 'Isso é um teste';
+frase; // NaN
-frase; // NaN

var idade = '28';
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33 

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

var sabeIngles=false
console.log(+sabeIngles) // 0

/*

GUIA COMPLETO DE OPERADORES
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators

*/