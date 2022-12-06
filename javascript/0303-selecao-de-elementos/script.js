// Seleciona pelo ID
const dragoesSection = document.getElementById('dragoes');
const contatoSection = document.getElementById('contato');

// Retorna null caso não exista
const naoExiste = document.getElementById('teste');

console.log(dragoesSection.innerText) // observe no modo console que irá retornar apenas o texto puro da secao dragoes

console.log(naoExiste)



/* getElementsByClassName e getElementsByTagName selecionam e retornam uma lista de elementos do DOM (todos que tiverem a classe inclusa ou forem da mesma tag). A lista retornada está ao vivo, significa que se elementos forem adicionados, ela será automaticamente atualizada. */

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection) // mostra que nesse caso retorna um array com todos os elementos que possuem a classe grid-section

const contato = document.getElementsByClassName('grid-section contato'); // nesse caso serao adicionados os elementos que possuem AMBAS as classes

// Seleciona todas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retorna o primeiro elemento
console.log(gridSection[0]);


/* 

SELETOR GERAL ÚNICO
querySelector retorna o primeiro elemento que combinar com o seu seletor CSS. ou seja, apenas um, nao retorna um vetor de elementos.

IMPORTANTE*** usamos a selecao do query selector exatamente como fazemos com o CSS (. para classes, # para ids, etc)

*/
const animais = document.querySelector('.animais');
const contato1 = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const linkCSS = document.querySelector('[href^="https://"]');
const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas, ou seja, dentro de algum seletor previo
const navItem = primeiroUl.querySelector('li');

const primeiraLi=document.querySelector('li')
console.log(primeiraLi)



/*

SELETOR GERAL LISTA

querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList (pode retornar um array caso hajam mais de um elemento com as condicoes citadas)

Diferente do getElementsByClassName, a lista aqui é estática, ou seja, nao se atualiza automaticamente sozinha dinamicamente

*/

const gridSection1 = document.querySelectorAll('.grid-section');
const listas = document.querySelectorAll('ul');
const titulos = document.querySelectorAll('.titulo');
const fotosAnimais = document.querySelectorAll('.animais-lista img');

// Retorna o segundo elemento
console.log(titulos)
console.log(gridSection[1]);





/*

HTMLCOLLECTION VS NODELIST
A diferença está nos métodos e propriedades de ambas. Além disso a NodeList retornada com querySelectorAll é estática.

Métodos GetElements -> HTML Collection

Métodos QuerySelectorAll -> Node List

*/

const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

// titulo.classList.add('grid-section');

console.log(gridSectionHTML); // 4 itens apos a insercao do comando acima adicionando a classe grid-section
console.log(gridSectionNode); // 3 itens permace com 3 itens mesmo apos a insercao do comando acima adicionando a classe grid section





/*

ARRAY-LIKE
HTMLCollection e NodeList são array-like, parecem uma array mas não são. O método de Array forEach() por exemplo, existe apenas em NodeList.

É possível transformar array-like em uma Array real, utilizando o método Array.from(gridSection)

*/

const gridSection2 = document.querySelectorAll('.grid-section');

gridSection2.forEach(function(gridItem, index, array) {
  gridItem.classList.add('azul');
  console.log(index) // index do item na array
  console.log(array) // a array completa
});


const arrayGrid=Array.from(gridSectionHTML) // transforma o gridSectionHTML (HTML Collection) em um array com esse método

arrayGrid.forEach((item,indice,array)=>{
    console.log(item,indice)
})