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
frutas[1].length; // 5
frutas[2].length; // 2
