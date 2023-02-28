/*

ARRAYS
Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais.

*/

const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

dados[2]('Ford'); // Ford
dados[1][2].cor; // Azul




/*

CONSTRUÇÃO DE ARRAYS
Toda array herda os métodos e propriedades do protótipo do construtor Array.

Os valores das array's não são estáticos

*/

const instrumentos1 = ['Guitarra', 'Baixo', 'Violão'];
const carros = new Array('Corola', 'Mustang', 'Honda');

carros[1] // Mustang
carros[2] = 'Ferrari';
carros[10] = 'Parati';
carros.length; // 11




/*

ARRAY.FROM()
Array.from() é um método utilizado para transformar array-like objects, em uma array.

*/

let li = document.querySelectorAll('li'); // NodeList
console.log(li)
li = Array.from(li); // Array
console.log(li)

const carros1 = {
  0: 'Fiat',
  1: 'Honda',
  2: 'Ford',
  length: 4,
}

// so funcionara com a propriedade length no fim, ficara um item alem dos tres normais porque o length eh 4 e sao 3 elementos.
const carrosArray = Array.from(carros1);
console.log(carrosArray)




/*

ARRAY.ISARRAY()
Verifica se o valor passado é uma array e retorna um valor booleano.

*/

let li2 = document.querySelectorAll('li'); // NodeList
Array.isArray(li2); // false

li2 = Array.from(li2); // Array
Array.isArray(li2); // true




/*

ARRAY.OF(), ARRAY() E NEW ARRAY()
A palavra chave new não é necessária para utilizar o construtor Array.

*/

Array.of(10); // [10]
Array.of(1,2,3,4); // [1,2,3,4]
console.log(Array.of(1,2,3,4))
new Array(5); // [,,,,]  (vazio com 5 elementos vazios)
console.log(new Array(5))
Array(5); // [,,,,] (vazio com 5 elementos vazios)
Array(1,2,3,4); // [1,2,3,4]




/*

PROPRIEDADES E MÉTODOS DO PROTOTYPE
[].length retorna o tamanho da array.

*/

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3

frutas[0].length; // 6
frutas[1].length; // 4
console.log(frutas[1].length)
frutas[2].length; // 2




/*

MÉTODOS MODIFICADORES [].SORT()
Os próximos métodos que vamos falar sobre, são métodos modificadores (mutator methods). Além de retornarem um valor, eles modificam a array original. [].sort() organiza a pelo unicode.

*/

const instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
instrumentos2.sort();
instrumentos2; // ['Baixo', 'Guitarra', Violão] colocou em ordem alfabetica

const idades = [32,21,33,43,1,12,8];
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8] 
console.log("🚀 ~ file: script.js:131 ~ idades:", idades)




/*

[].UNSHIFT() E [].PUSH()
[].unshift() adiciona elementos ao início da array e retorna o length da mesma. [].push() adiciona elementos ao final da array e retorna o length da mesma.

*/

const carros3 = ['Ford', 'Fiat', 'VW'];
carros3.unshift('Honda', 'Kia'); // 5
carros3; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];

carros3.push('Ferrari'); // 6
carros3; // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];




/*

[].SHIFT() E [].POP()
[].shift() remove o primeiro elemento da array e retorna o mesmo. [].pop() remove o último elemento da array e retorna o mesmo.

*/

const carros4 = ['Ford', 'Fiat', 'VW', 'Honda'];
const primeiroCarro = carros4.shift(); // 'Ford'
carros4; // ['Fiat', 'VW', 'Honda'];

const ultimoCarro = carros4.pop(); // 'Honda'
carros4; // ['Fiat', 'VW'];




/*

[].REVERSE()
[].reverse() inverte os itens da array e retorna a nova array.

modifica a array original

*/

const carros5 = ['Ford', 'Fiat', 'VW', 'Honda'];
carros5.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford'];
console.log("🚀 ~ file: script.js:179 ~ carros5:", carros5) // ['Honda', 'VW', 'Fiat', 'Ford']
