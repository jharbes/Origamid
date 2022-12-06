/*

FOREACH
Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.

O forEach necessariamente roda o numero de vezes igual ao numero de elementos do vetor, sempre.

*/

const imgs = document.querySelectorAll('img');

imgs.forEach(function(item){
  console.log(item);
});

/*

PARÂMETROS DO FOREACH
O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse função pode receber três parâmetros: valorAtual, index e array;

*/

const imgs1 = document.querySelectorAll('img');

imgs1.forEach(function(item, index, array){ // IMPORTANTE!!! ****
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});



/*

FOREACH E ARRAY
forEach é um método de Array, alguns objetos array-like possuem este método. Caso não possua, o ideal é transformá-los em uma array.

O HTML Collection é um exemplo de objeto array-like que nao possui o metodo forEach mas pode ser transformado em array.

*/

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});




/*

ARROW FUNCTION
Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.

*/

const imgs2 = document.querySelectorAll('img');

imgs2.forEach((item) => {
  console.log(item);
});



/*

PARÂMETROS E PARÊNTESES

Particularidades da arrow function:
- Caso haja apenas um argumento na funcao nao precisamos usar parenteses no argumento.

Na dúvida é melhor usar os parenteses sempre.

*/

const imgs3 = document.querySelectorAll('img');

// parâmetro único não precisa de parênteses
imgs3.forEach(item => {
  console.log(item);
});

// multiplos parâmetros precisam de parênteses
imgs3.forEach((item, index) => {
  console.log(item, index);
});

// sem parâmetro precisa dos parênteses, mesmo vazio
let i = 0;
imgs3.forEach(() => {
  console.log(i++);
});




/*

RETURN
É possível omitir as chaves {} para uma função que retorna uma linha.

Não é permitido fechar a linha com ;

*/

const imgs4 = document.querySelectorAll('img');

imgs4.forEach(item => 
  console.log(item)
);

imgs4.forEach(item => console.log(item));




// Abaixo a mesma funcao apenas digitada de maneiras diferentes
i=0
imgs4.forEach(function(){
    console.log(i++)
})


i=0
imgs4.forEach(() => console.log(i++))

