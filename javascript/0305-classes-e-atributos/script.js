/*

CLASSLIST

Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

*/

const menu = document.querySelector('.menu');

menu.className; // retorna uma string
menu.classList; // retorna a lista de classes
menu.classList.add('ativo'); // adiciona uma classe ao elemento
menu.classList.add('ativo', 'mobile'); // adiciona duas classes
menu.classList.remove('ativo'); // remove a classe do elemento
menu.classList.toggle('ativo'); // adiciona/remove (troca) a classe
menu.classList.contains('ativo'); // retorna true ou false se possui a classe
menu.classList.replace('ativo', 'inativo'); // troca a classe por outra

console.log(menu.className)
console.log(menu.classList)

// Por se tratar de um array like podemos acessar item a item por meio dos indices da lista:

console.log(menu.classList[0])
console.log(menu.classList[1])



/*

ATTRIBUTES
Retorna uma array-like com os atributos do elemento.

*/

const dragoes = document.querySelector('.dragoes');

dragoes.attributes; // retorna todos os atributos
dragoes.attributes[0]; // retorna o primeiro atributo

console.log(dragoes.attributes)
console.log(dragoes.attributes[0])
console.log(dragoes.attributes[1])
console.log(dragoes.attributes.class) // retorna diretamente o atributo selecionado sem precisar saber o indice no vetor
console.log(dragoes.attributes.id)
console.log(dragoes.attributes['data-texto']) // utiliza-se dessa maneira quando o atributo possui hifem , pois nesse caso nao funciona da forma tradicional




