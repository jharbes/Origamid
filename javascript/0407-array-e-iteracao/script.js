/*

[].FOREACH()
[].forEach(callback(itemAtual, index, array)) a função de callback é executada para cada item da array. Ela possui três argumentos, itemAtual (valor do item da array), index (index do valor na array) e array (array original).

*** IMPORTANTE: o terceiro argumento do forEach é uma referencia ao array original e nao um clone, ou seja, qualquer alteracao nele tambem vai alterar o array original

O método sempre retorna undefined

*/

const carros = ['Ford', 'Fiat', 'Honda'];
carros.forEach(function(item, index, array) {
  console.log(item.toUpperCase());
});

// com Arrow Function
carros.forEach((item, index, array) => {
  console.log(item.toUpperCase());
});


// ARROW FUNCTION

const li = document.querySelectorAll('li');

// um argumento nao precisa de parenteses e uma linha de codigo dentro da arrow function nao precisa de chaves
li.forEach(i => i.classList.add('ativa'));

li.forEach(function(item) {
  item.classList.add('ativa');
});

/*

MODIFICAR A ARRAY ORIGINAL
O terceiro argumento do callback é uma referência direta e se modificado irá também modificar a array original.

É melhor utilizarmos o map para isso

*/

const carros1 = ['Ford', 'Fiat', 'Honda'];
carros1.forEach((item, index, array) => {
  array[index] = 'Carro ' + item;
});

carros1; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']




/*

[].MAP()
[].map(callback(itemAtual, index, array)) funciona da mesma forma que o forEach(), porém ao invés de retornar undefined, retorna uma nova array com valores atualizados de acordo com o return de cada iteração.

*/

const carros2 = ['Ford', 'Fiat', 'Honda'];
const newCarros = carros2.map((item) => {
  return 'Carro ' + item;
});

carros2; // ['Ford', 'Fiat', 'Honda']
newCarros; // ['Carro Ford', 'Carro Fiat', 'Carro Honda']; 

/*

VALOR RETORNADO
Se não retornarmos nenhum valor durante a iteração utilizando map, o valor retornado como de qualquer função que não possui o return, será undefined.

*/

const carros3 = ['Ford', 'Fiat', 'Honda'];
const newCarros1 = carros.map((item) => {
  const novoValor = 'Carro ' + item;
});

newCarros1; // [undefined, undefined, undefined];

/*

ARROW FUNCTION E [].MAP()
Uma Arrow Function de linha única e sem chaves irá retornar o valor após a fat arrow =>.

*/

const numeros = [2, 4, 6, 8, 10, 12, 14];

// nesse caso , na arrow function, o return fica implicito quando temos apenas uma linha de codigo
const numerosX3 = numeros.map(n => n * 3);

numerosX3; // [6, 12, 18, 24, 30, 36, 42];
console.log("file: script.js:95 ~ numerosX3", numerosX3)




/*

[].MAP() VS [].FOREACH()
Se o objetivo for modificar os valores da array atual, sempre utilize o map, pois assim uma nova array com os valores modificados é retornada e você pode imediatamente iterar novamente sobre estes valores.

*/

const numeros2 = [2, 4, 6, 8, 10, 12, 14];
const numerosX3_2 = numeros.map(n => n * 3);

numerosX3_2; // [6, 12, 18, 24, 30, 36, 42];




/*

[].MAP() COM OBJETOS
Map pode ser muito útil para interagirmos com uma array de objetos, onde desejamos isolar um valor único de cada objeto.

*/

const aulas = [
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

const tempoAulas = aulas.map(aula => aula.min);
// [15, 10, 20, 25];

const puxarNomes = aula => aula.nome;
console.log("file: script.js:145 ~ puxarNomes", puxarNomes)
const nomesAulas = aulas.map(puxarNomes);
console.log("file: script.js:147 ~ nomesAulas", nomesAulas)
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']




/*

[].REDUCE()
[].reduce(callback(acumulador, valorAtual, index, array), valorInicial) executa a função de callback para cada item da Array. Um valor especial existe nessa função de callback, ele é chamado de acumulador, mas é na nd drop this view into the Secondary Side Bar.

verdade apenas o retorno da iteração anterior.

*** O acumulador é o retorno da iteracao anterior

*/

const aulas2 = [10, 25, 30];

// a ausencia do acumulador como ultimo argumento    faz com que ele utilize o primeiro item como valor inicial do acumulador
const total1 = aulas2.reduce((acumulador, atual) => {
    console.log("file: script.js:164 ~ total1 ~ atual", atual)
    console.log("file: script.js:164 ~ total1 ~ acumulador", acumulador)
    console.log("file: script.js:164 ~ total1 ~ atual", atual) 
    return acumulador + atual;
});
total1; // 65


const numeros1=[10,25,30]
const reduceNumeros=numeros1.reduce((acumulador,item,index,array)=>{
    console.log(acumulador,item,index)
    return acumulador+item
},33) // o acumulador vem como argumento apos a funcao declarada no reduce


// nesse caso o acumulador comeca com 100
const total2 = aulas2.reduce((acc, cur) => acc + cur, 100);
total2; // 165




/*

MAIOR VALOR COM [].REDUCE()

*/

const numeros3 = [10, 25, 60, 5, 35, 10];

const maiorValor = numeros3.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
});

maiorValor; // 60
console.log("file: script.js:203 ~ maiorValor", maiorValor)
