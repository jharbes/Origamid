/*

ADDEVENTLISTENER
Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento.

O terceiro parâmetro é opcional.

*/

const img = document.querySelector('img');

// elemento.addEventListener(event, callback, options)
img.addEventListener('click', function() {
  console.log('Clicou');
})




/*

CALLBACK
É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima

*/

const img1 = document.querySelector('img');
function callback() {
  console.log('Clicou');
}

img1.addEventListener('click', callback); // 🚀 - maneira correta

img1.addEventListener('click', callback()); // undefined - não se deve passar a funcao e ja ativar ela, deve se usar a maneira anterior sem os parenteses

img1.addEventListener('click', function() {
  console.log('Clicou');
})

img1.addEventListener('click', () => {
  console.log('Clicou');
})




/*

EVENT
O primeiro parâmetro do callback é referente ao evento que ocorreu.

Geralmente utilizam 'e' como nome do parâmetro

*/

const img2 = document.querySelector('img');

function callback(event) {
  console.log(event);
}

img2.addEventListener('click', callback);
