/*

outerHTML, innerHTML e innerText

Propriedades que retornam uma string contendo o html ou texto. É possível atribuir um novo valor para as mesmas element.innerText = 'Novo Texto'.

*/

const menu = document.querySelector('.menu');

menu.outerHTML; // todo o html do elemento, inclusive as tags e configuracoes
console.log(menu.outerHTML)

menu.innerHTML; // html interno, apenas os filhos dele
console.log(menu.innerHTML)

menu.innerText; // texto, sem tags
console.log(menu.innerText)

menu.innerText = '<p>Texto</p>'; // a tag vai como texto
menu.innerHTML = '<p>Texto</p>'; // a tag é renderizada



/*

Trasversing

Como navegar pelo DOM, utilizando suas propriedades e métodos.

*/

const lista = document.querySelector('.dragoes-lista');
console.log(lista)

lista.parentElement; // pai, ou seja, um elemento acima do elemento em questao
console.log(lista.parentElement)

lista.parentElement.parentElement; // pai do pai

lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho
