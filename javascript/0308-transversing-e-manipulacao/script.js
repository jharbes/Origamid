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

lista.previousElementSibling; // elemento acima fisicamente dentro do documento html, ou seja, aquele que consta imediatamente antes no arquvio html
console.log(lista.previousElementSibling)

lista.nextElementSibling; // elemento abaixo fisicamente dentro do documento html, ou seja, aquele que consta imediatamente depois dentro do arquivo html
console.log(lista.nextElementSibling)

lista.children; // cria um HTMLCollection com os filhos
console.log(lista.children)

lista.children[0]; // primeiro filho
console.log(lista.children[0])

lista.children[--lista.children.length]; // último filho, tambem podemos usar lista.children.length-1
console.log(lista.children[--lista.children.length]) 

lista.querySelectorAll('li'); // todas as LI's, de maneira quase identifca ao lista.children, no entanto dessa vez ele vai retornar uma node lista em vez de uma html collection
console.log(lista.querySelectorAll('li'))

lista.querySelector('li:last-child'); // último filho
console.log(lista.querySelector('li:last-child'))



/*

Element vs Node

Element's represetam um elemento html, ou seja, uma tag. Node representa um nó, e pode ser um elemento (Element), texto, comentário, quebra de linha e mais.

Geralmente estamos atrás de um elemento e não de qualquer node em si.

*/

const lista1 = document.querySelector('.dragoes-lista');
console.log(lista1)

lista1.previousElementSibling; // elemento acima
lista1.previousSibling; // node acima

lista1.firstChild; // primeiro node child
console.log(lista1.firstChild)

lista1.childNodes; // todos os node child
console.log(lista1.childNodes)



/*

Manipulando Elementos

É possível mover elementos no dom com métodos de Node.

*/

const lista2 = document.querySelector('.dragoes-descricao');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');
const mapa=document.querySelector('.mapa')
console.log(titulo)

contato.appendChild(lista2) // move lista para o final de contato

contato.insertBefore(lista2, titulo); // insere a lista antes de titulo, isso tudo DENTRO DA TAG CONTATO

contato.removeChild(titulo); // remove titulo de contato

contato.replaceChild(lista2, mapa); // substitui mapa por lista2




/*

Novos Elementos

Podemos criar novos elementos com o método createElement()

*/

const dragoes = document.querySelector('.dragoes');

const novoH1 = document.createElement('h1'); // cria uma nova tag do tipo <h1>

novoH1.innerText = 'Novo Título'; // inclui o texto na nova tag criada do tipo <h1>

novoH1.classList.add('titulo'); // adiciona a classe 'titulo' para a nova tag <h1> criada

dragoes.appendChild(novoH1); // inclui o novo elemento criado novoH1 no fim do elemento dragoes, como ultimo filho (porem dentro do elemento dragoes)




/*

Clonar Elementos

Todo elemento selecionado é único. Para criarmos um novo elemento baseado no anterior, é necessário utilizar o método cloneNode()

true sinaliza para incluir os filhos

*/

const titulo1 = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo1;
// titulo, titulo2 e novoTitulo são iguais, nesse caso as tres variaveis estao apontando para o mesmo elemento, ou seja, alterar uma delas ira alterar todas e o mesmo elemento no documento html

const cloneTitulo = titulo1.cloneNode(true); // nesse caso ele ira incluir todos os elementos internos do elemento, importante salientar que o elemento clonado nao é o elemento original, SAO ELEMENTOS DISTINTOS**** essa é uma grande vantagem de usar o clone em vez de usar a atribuicao de novo elemento para o mesmo elemento.

const contato1 = document.querySelector('.contato');
contato1.appendChild(cloneTitulo); // agora ele vai incluir como ultimo elemento de contato1 o titulo que foi clonado
