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


