/*

NUMBER
É a construtora de números, todo número possui as propriedades e métodos do prototype de Number. Number também possui alguns métodos.

*/

const ano = 2018;
const preco = new Number(99);



/*

NUMBER.ISNAN() E NUMBER.ISINTEGER();
isNaN() é um método de Number, ou seja, não faz parte to protótipo. isInteger() verifica se é um inteiro

*/

Number.isNaN(NaN); // true
Number.isNaN(4 + 5); // false
console.log(Number.isNaN('teste')) // false

Number.isInteger(20); // true
Number.isInteger(23.6); // false
console.log(Number.isInteger(23.6))
console.log(Number.isInteger(0.0)) // true
console.log(Number.isInteger(23.0)) // true



/*

NUMBER.PARSEFLOAT() E NUMBER.PARSEINT()
parseFloat() serve para retornarmos um número a partir de uma string. A String deve começar com um número. parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal.

Float possui decimal, Integer não.

*/

parseFloat('99.50'); // Mesma função sem o Number
Number.parseFloat('99.50'); // 99.5
Number.parseFloat('100 Reais'); // 100
Number.parseFloat('R$ 100'); // NaN


// O parseInt utiliza o segundo parametro como 10 para que o numero seja convertido para o inteiro decimal, mas pode ser usado tambem para converter para binarios ou hexadecimal
console.log(parseInt('100.27 reais')) // 100
console.log(Number.parseInt(23.49)) // 23
parseInt('99.50', 10); // 99
parseInt(5.43434355555, 10); // 5
Number.parseInt('100 Reais', 10); // 100



/*

N.TOFIXED(DECIMAIS)
Arredonda o número com base no total de casas decimais do argumento.

*** IMPORTANTE: O resultado é uma string e nao um numero, podemos transformar em numero colocando um + na frente do resultado

*/

const preco1 = 2.99;
preco1.toFixed(); // 3

const carro = 1000.455;
carro.toFixed(2) // 1000.46

console.log(carro.toFixed(2)+2) // 1000.462
console.log(+carro.toFixed(2)+2) // 1002.46

const preco2 = 1499.49;
preco2.toFixed() // 1499



/*

N.TOSTRING(RADIX)
Transforma o número em uma string com base no Radix. Use o 10 para o sistema decimal.

*/

const preco3 = 2.99;
preco3.toString(10); // '2.99'
