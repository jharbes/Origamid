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




/*

GETATTRIBUTE E SETATTRIBUTE
Métodos que retornam ou definem de acordo com o atributo selecionado

É muito comum métodos de get e set;

*/

const img = document.querySelector('img'); // selecionando apenas o primeiro elemento

img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt

img.setAttribute('alt','Caraxes') // define o atributo se nao existir, caso exista altera o ja existente

img.hasAttributes(); // true / false se tem algum atributo

console.log(img.getAttribute('src')) // valor do src
console.log(img.getAttribute('alt'))
console.log(img.setAttribute('alt', 'Texto Alternativo')) // muda o alt
console.log(img.hasAttribute('id')) // true / false
console.log(img.removeAttribute('alt')) // remove o alt

console.log(img.hasAttributes()) // true / false se tem algum atributo




/*

READ ONLY VS WRITABLE
Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.

Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = ''

*/

const dragoes1 = document.querySelector('.dragoes');

dragoes1.className; // string com o nome das classes
dragoes1.className = 'azul'; // substitui completamente a string
dragoes1.className += ' vermelho'; // adiciona vermelho à string

dragoes1.className='grid-section dragoes'

// dragoes1.attributes = 'class="ativo"'; // não funciona, read-only *****

