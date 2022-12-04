// Retorne o url da página atual utilizando o objeto window

console.log(window.location.href)

// Seleciona o primeiro elemento da página que
// possua a classe ativo

console.log(document.getElementsByClassName('ativo')[0])

const primeiroAtivo=document.querySelector('.ativo') // seleciona apenas o primeiro elemento que possui a classe ativo

const todosAtivos=document.querySelectorAll('.ativo') // seleciona todos os elementos que possuem a classe ativo

console.log(primeiroAtivo)
console.log(todosAtivos) // nesse caso acessaremos os elementos como se fosse um array:

console.log(todosAtivos[0]) // primeiro elemento
console.log(todosAtivos[1]) // segundo elemento

// Retorne a linguagem do navegador

console.log(navigator.language)

// Retorne a largura da janela 

console.log(window.innerWidth)