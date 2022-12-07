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

function callback2(event) {
  console.log(event);
}

img2.addEventListener('click', callback2);




/*

PROPRIEDADES DO EVENT

*/

const dragoesLista = document.querySelector('.dragoes-lista');

function executarCallback(event) {
    const currentTarget = event.currentTarget; // this - o proprio elemento que sofreu o evento, dependendo do caso pode ser diferente do event.target como por exemplo quando o target é um conjunto de elementos e nao um apenas.

    const target = event.target; // onde o clique ocorreu, elemento exato do clique

    const type = event.type; // tipo de evento
    const path = event.path;
    console.log(currentTarget)
    console.log(target)
    console.log(type)
    console.log(path);
}

dragoesLista.addEventListener('click', executarCallback);




/*

EVENT.PREVENTDEFAULT()

Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado. (exemplo mostrado abaixo)

*/

const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);
