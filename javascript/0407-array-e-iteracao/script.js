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
