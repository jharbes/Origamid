/*

DICA
Selecione o elemento no inspetor (dom)

Abra o console e digite $0 para selecionar o mesmo

Os elementos selecionados anteriormente são $1, $2 ...

*/



/*

HEIGHT E WIDTH
Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only

Mesma coisa para o Width, clientWidth ...

*/

const section = document.querySelector('.dragoes-lista');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

console.log(section.clientHeight)
console.log(section.offsetHeight)
console.log(section.scrollHeight)


section.clientWidth; // width + padding
section.offsetWidth; // width + padding + border
section.scrollWidth; // width total, mesmo dentro de Width

console.log(section.clientWidth)
console.log(section.offsetWidth)
console.log(section.scrollWidth)




/*

OFFSETTOP E OFFSETLEFT

*/

const section1 = document.querySelector('.dragoes-lista');

// Distância entre o topo do elemento e o topo da página
section1.offsetTop;
console.log(section1.offsetTop)


// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section1.offsetLeft;
console.log(section1.offsetLeft)




/*

GETBOUNDINGCLIENTRECT()
Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.

*/

const section2 = document.querySelector('.dragoes-lista');

const rect = section2.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

console.log(`height do elemento ${rect.height}`)
console.log(`width do elemento ${rect.width}`)
console.log(`distância entre o topo do elemento e o scroll ${rect.top}`)




/*

WINDOW

*/

window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}




/*

MATCHMEDIA();
Utilize um media-querie como no CSS para verificar a largura do browser

*/

const small = window.matchMedia('(max-width: 600px)');


// O atributo matches retornara true caso o width da tela atual seja menor que o max-width escolhido, ou retornara false caso o width da tela seja maior que o max-width escolhido

if(small.matches) { 
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}
