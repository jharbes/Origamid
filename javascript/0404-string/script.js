/*

STRING
É a construtora de strings, toda string possui as propriedades e métodos do prototype de String.

*/

const comida = 'Pizza';
const liquido = new String('Água');
const ano = new String(2018);




/*

STR.LENGTH
Propriedade com o total de caracteres da string.

*/

const comida1 = 'Pizza';
const frase = 'A melhor comida';

comida1.length; // 5
frase.length; // 15

// acessando os caracteres como se fosse um array
comida1[0] // P
frase[0] // A
frase[frase.length - 1] // a




/*

STR.CHARAT(N)
Retorna o caracter de acordo com o index de (n).
Leia-se como "caractere no indice x string.charAt(x)"
Funciona como o metodo de utilizar a string como um array

*/

const linguagem = 'JavaScript';

linguagem.charAt(0); // J
linguagem.charAt(2); // v
linguagem.charAt(linguagem.length - 1); // t




/*

STR.CONCAT(STR2, STR3, ...)
Concatena as strings e retorna o resultado.

*/

const frase1 = 'A melhor linguagem é ';
const linguagem1 = 'JavaScript';

const fraseCompleta = frase1.concat(linguagem, '!!');
console.log(fraseCompleta)




/*

STR.INCLUDES(SEARCH, POSITION)
Procura pela string exata dentro de outra string. A procura é case sensitive.

Se nao for colocado o argumento position (segundo) sera procurado desde o inicio da string

Se for adicionado entao a procura sera a partir do indice position que comecara a procura

Retorna boolean
 
*/

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false




/*

STR.ENDSWITH(SEARCH) E STR.STARTSWITH(SEARCH)
Procura pela string exata dentro de outra string. A procura é case sensitive.

*/

const fruta1 = 'Banana';

fruta.endsWith('nana'); // true
fruta.startsWith('Ba'); // true
fruta.startsWith('na'); // false

console.log(fruta.endsWith('nana'))
console.log(fruta.startsWith('na'))




/*

STR.SLICE(START, END)
Corta a string de acordo com os valores de start e end.

*/

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

transacao1.slice(0, 3); // Dep
console.log(transacao1.slice(0, 3))
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

transacao1.slice(12); // cliente  => vai do index 12 em diante
transacao1.slice(-4); // ente  => anda 4 indices pra tras
transacao1.slice(3, 6); // ósi
transacao3.slice(0,-2) // Taxa de camis  => corta os dois ultimos caracteres
console.log(transacao3.slice(0,-2))




/*

STR.SUBSTRING(START, END)
Corta a string de acordo com os valores de start e end. Não funcionar com valores negativos como o slice.

Quase identico ao slice

*/

const linguagem2 = 'JavaScript';
linguagem2.substring(3,5); // aS
linguagem2.substring(0,4); // Java
linguagem2.substring(4); // Script
linguagem2.substring(-3); // JavaScript




/*

STR.INDEXOF(SEARCH) E STR.LASTINDEXOF(SEARCH)
Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.

Também é case sensitive

*/

const instrumento = 'Guitarra';

instrumento.indexOf('r'); // 5
instrumento.lastIndexOf('r'); // 6
instrumento.lastIndexOf('i') // 2
console.log(instrumento.lastIndexOf('i'))
instrumento.indexOf('ta'); // 3




/*

STR.PADSTART(N, STR) E STR.PADEND(N, STR)
Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. 

O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.

*/

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];
const cachorro = 'Labrador'

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
})

console.log('-----------------------------------------------')

// costuma se utilizar esses lacos para alinhar os itens na tela
listaPrecos.forEach((preco) => {
    console.log(preco.padEnd(10, '-!-!'));
  })

listaPrecos[0].padStart(10, '.'); // .....R$ 99
listaPrecos[0].padEnd(10, '.');   // R$ 99.....

cachorro.padStart(10) // completa com espacos na frente ate completar 10 caracteres
console.log(cachorro.padStart(20))
console.log(cachorro.padStart(30,'()()()()()'))  




