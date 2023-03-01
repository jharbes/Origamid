/*

PODEMOS RETORNAR OUTROS VALORES

*/

const aulas3 = [
    {
      nome: 'HTML 1',
      min: 15
    },
    {
      nome: 'HTML 2',
      min: 10
    },
    {
      nome: 'CSS 1',
      min: 20
    },
    {
      nome: 'JS 1',
      min: 25
    },
  ]
  
  const listaAulas = aulas3.reduce((acumulador, atual, index) => {
    acumulador[index] = atual.nome;
    console.log("file: script2.js:30 ~ listaAulas ~ acumulador", acumulador)
    return acumulador;
  }, {}) // o {} eh um objeto vazio sendo passado como acumulador inicial
  // o retorno de tudo sera um objeto onde o atributo será o indice do array e o valor do atributo sera o valor do atributo nome do array inicial
  



  /*

  [].REDUCERIGHT()
Existe também o método [].reduceRight(), a diferença é que este começa a iterar da direita para a esquerda, enquanto o reduce itera da esquerda para a direita.

*/

const frutas = ['Banana', 'Pêra', 'Uva'];

const frutasRight = frutas.reduceRight((acc, fruta) => acc + ' ' + fruta);
const frutasLeft = frutas.reduce((acc, fruta) => acc + ' ' + fruta);

// funciona como um acumulador de string
frutasRight; // Uva Pêra Banana
console.log("file: script2.js:49 ~ frutasRight", frutasRight)
frutasLeft; // Banana Pêra Uva
console.log("file: script2.js:51 ~ frutasLeft", frutasLeft)




/*

[].SOME()
[].some(), se pelo menos um return da iteração for truthy, ele retorna true.

*/

const frutas2 = ['Banana', 'Pêra', 'Uva'];
const temUva = frutas2.some((fruta) => {
  return fruta === 'Uva';
}); // true

function maiorQue100(numero) {
  return numero > 100;
}
const numeros = [0, 43, 22, 88, 101, 2];
const temMaior = numeros.some(maiorQue100); // true




/*

[].EVERY()
[].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.

*/

const frutas3 = ['Banana', 'Pêra', 'Uva', ''];
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutas3.every((fruta) => {
  return fruta; // false
});

const numeros2 = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros2.every(x => x > 3); // true
