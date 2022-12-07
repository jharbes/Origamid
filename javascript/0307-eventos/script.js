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
  console.log(this)
}

linkExterno.addEventListener('click', clickNoLink);




/*

THIS
A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.

Geralmente igual ao event.currentTarget

*/

const dragoesDescricao = document.querySelector('.dragoes-descricao');

function callback3(event) {
    console.log(this); // retorna a imagem (objeto img3)
    console.log(this.getAttribute('src'));
}

dragoesDescricao.addEventListener('click', callback3);




/*

DIFERENTES EVENTOS
Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também.

https://developer.mozilla.org/en-US/docs/Web/Events

*/

const h1 = document.querySelector('h1');

function callback4(event) {
  console.log(event.type, event);
}

h1.addEventListener('click', callback4);
h1.addEventListener('mouseenter', callback4); // mouse entrando no objeto
window.addEventListener('scroll', callback4); // rolando a barra de rolagem
window.addEventListener('resize', callback4); // mudando o navegador de tamanho
window.addEventListener('keydown', callback4); // apertou alguma teclado do teclado




/*

KEYBOARD
Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard.

*/

function handleKeyboard(event) {
    if(event.key === 'a')
      document.body.classList.toggle('azul');
    else if(event.key === 'v')
      document.body.classList.toggle('vermelho');
  }
  
  window.addEventListener('keydown', handleKeyboard);
  