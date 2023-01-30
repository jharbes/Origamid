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




