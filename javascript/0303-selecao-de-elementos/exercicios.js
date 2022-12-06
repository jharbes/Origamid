// Retorne no console todas as imagens do site

console.log(document.getElementsByTagName('img'))
console.log(document.querySelectorAll('img'))

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagensImg=document.querySelectorAll('[src^="img/caraxes"]')
console.log(imagensImg)

// Selecione todos os links internos (onde o href começa com #)

const linksInternos=document.querySelectorAll('[href^="#"]') // o acento representa que ele quer que veja apenas o comeco, sem o acento ^ seria o nome exato
console.log(linksInternos)

// Selecione o primeiro h2 dentro de .dragoes-descricao

const primeiroH2Animais=document.querySelector('.dragoes-descricao h2')
console.log(primeiroH2Animais)

// Selecione o último p do site

const todosP=document.getElementsByTagName('p')
const ultimoP=todosP[todosP.length-1]
console.log(ultimoP)