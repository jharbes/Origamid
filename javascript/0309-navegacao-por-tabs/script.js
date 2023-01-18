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

const tabContent = document.querySelectorAll('.js-tabcontent section'); // seleciona todas as sections dentro do elemento que possui a classe js-tabcontent



// USAMOS a condicional de baixo para evitar que caso haja algum problema no codigo e ele nao gere os nodelist de tabmenu e tabcontent de algum erro de console por nao ter rodado o codigo abaixo
if (tabMenu.length && tabContent.length){

    tabContent[0].classList.add('ativo') // deixando por default o primeiro elemento como ativo para que a pagina nao comece em branco


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

}




/*

ANIMAÇÃO COM CSS
Animação simples com css, sai de display none para display block.

.js .js-tabcontent section {
  display: none;
}

.js-tabcontent section.ativo {
  display: block !important;
  animation: show .5s forwards;
}

@keyframes show {
  from {
    opacity: 0;
    transform: translate3d(-30px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0px, 0, 0);
  }
}
COPIAR
Lembre-se, o display none remove o texto até dos leitores de tela (acessibilidade)

*/