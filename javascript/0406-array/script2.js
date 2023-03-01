/*

[].SPLICE()
[].splice(index, remover, item1, item2, ...) adiciona valores na array a partir do index. Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).

*/

const carros6 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros6.splice(1, 0, 'Kia', 'Mustang'); // [] -> retorno
carros6; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']
console.log("file: script2.js:11 ~ carros6", carros6)

carros6.splice(3, 2, 'Ferrari'); // ['Fiat', 'VW'] -> retorno
carros6; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']
console.log("file: script2.js:14 ~ carros6", carros6) // 




/*

[].COPYWITHIN()
[].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.

*/

let array1=['Item1', 'Item2', 'Item3', 'Item4','Item5']
array1.copyWithin(2, 0, 3);
console.log("file: script2.js:29 ~ array1", array1)
// ['Item1', 'Item2', 'Item1', 'Item2']

let array2=['Item1', 'Item2', 'Item3', 'Item4']
array2.copyWithin(-1);
console.log("file: script2.js:34 ~ array2", array2)
// ['Item1', 'Item2', 'Item3', 'Item1']




/*

[].FILL()
[].fill(valor, inicio, final) preenche a array com o valor, do início até o fim.

*/

let array3=['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');
console.log("file: script2.js:48 ~ array3", array3)
// ['Banana', 'Banana', 'Banana', 'Banana']

let array4=['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
console.log("file: script2.js:52 ~ array4", array4)
// ['Item1', 'Item2', 'Banana', 'Banana']

let array5=['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3);
console.log("file: script2.js:56 ~ array5", array5)
// ['Item1', 'Banana', 'Banana', 'Item4']




/*

MÉTODOS DE ACESSO [].CONCAT()
Os métodos abaixo ***não modificam*** a array original, apenas retornam uma array modificada. [].concat() irá concatenar a array com o valor passado.

*/

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];




/*

[].INCLUDES(), [].INDEXOF() E [].LASTINDEXOF()
[].includes(valor) verifica se a array possui o valor e retorna true ou false. [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array. Já o [].lastIndexOf(valor) retorna o index do último.

*/

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];

linguagens.includes('css'); // true
linguagens.includes('ruby'); // false
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2
linguagens.lastIndexOf('js'); // 5
