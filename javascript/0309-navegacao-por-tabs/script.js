/*

ADICIONAR CLASSES PARA MANIPULAÇÃO
A ideia de navegação por tabs, é ter uma lista de itens que controla a visualização de uma lista de conteúdo. Cada item da lista possui um conteúdo relacionado ao mesmo.

<!-- Primeiro, adicionar classes que irão
facilitar a manipulação dos elementos -->
<ul class="animais-lista js-tabmenu">
  ...
</ul>
<div class="animais-descricao js-tabcontent">
  ...
</div>

*/


// SELECIONAR OS ITENS

const tabMenu = document.querySelectorAll('.js-tabmenu li'); // selciona todos os li dentro do elemento que possui a classe js-tabmenu

const tabContent = document.querySelectorAll('.js-tabmenu section'); // seleciona todas as sections dentro do elemento que possui a classe js-tabcontent



/*

FUNÇÃO CALLBACK
Recebe index como parâmetro para ativar a tab. Sempre que ativar, remove a classe ativo de todos os outros elementos.

*/


function activeTab(index) {
  tabContent.forEach((content) => {
    content.classList.remove('ativo');
  });
  tabContent[index].classList.add('ativo');
}



/*

ADICIONAR O EVENTO
Neste caso precisamos passar antes a função anônima no callback, para podermos passar o index como argumento de activeTab

*/

tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    activeTab(index);
  });
});

